import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getArticles } from "../../api";
import Error from "../Error";
import Loading from "../Loading";
import ArticleList from "../ArticleList";
import ArticleSort from "../ArticleSort";
import { useParams } from "react-router-dom";

function ArticlesPage() {
  const { slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");

  useEffect(() => {
    getArticles({ sortBy, topic: slug })
      .then((res) => {
        setArticles(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [sortBy, slug]);

  const handleSortChange = (val) => {
    setIsLoading(true);
    setSortBy(val.value[0]);
  };

  if (error) {
    return <Error error={error} />;
  }

  return isLoading ? (
    <div>
      <Loading />
    </div>
  ) : (
    <>
      <Flex data-test-id="flex-container">
        {slug && (
          <Text fontSize="xl" fontWeight="bold" minWidth="50%">
            Topic: {slug}
          </Text>
        )}
        <ArticleSort
          sortBy={sortBy}
          onChange={handleSortChange}
        />
      </Flex>
      <ArticleList articles={articles} />
    </>
  );
}

export default ArticlesPage;
