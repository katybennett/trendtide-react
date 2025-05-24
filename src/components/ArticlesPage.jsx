import { Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getArticles } from "../api";
import Error from "./Error";
import Loading from "./Loading";
import ArticleList from "./ArticleList";
import ArticleSort from "./ArticleSort";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");

  useEffect(() => {
    getArticles({ sortBy })
      .then((res) => {
        setArticles(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [sortBy]);

  const handleSortChange = (val) => {
    setIsLoading(true);
    setSortBy(val.value[0]);
  };

  if (error) {
    return <Error />;
  }

  return isLoading ? (
    <div>
      <Loading />
    </div>
  ) : (
    <>
      <Text fontSize="xl" fontWeight="bold">
        {/* Articles */}
      </Text>
      <ArticleSort sortBy={sortBy} onChange={handleSortChange} />
      <ArticleList articles={articles} />
    </>
  );
}

export default ArticlesPage;
