import { Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getArticles } from "../../api";
import Loading from "../Loading";
import ArticleList from "../ArticleList";
import ArticleSort from "../ArticleSort";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router";
import ErrorPage from "./ErrorPage";

function ArticlesPage() {
  const { slug } = useParams();
  const [urlSearchParams, setSearchParams] = useSearchParams({
    sortBy: "created_at",
    orderBy: "desc",
  });
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = Object.fromEntries(urlSearchParams);
  const { sortBy, orderBy } = searchParams;

  useEffect(() => {
    getArticles({ sortBy, orderBy, topic: slug })
      .then((res) => {
        setArticles(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [sortBy, orderBy, slug]);

  const handleSortChange = (val) => {
    setIsLoading(true);

    setSearchParams({
      ...searchParams,
      sortBy: val.value[0],
    });
  };

  const handleOrderChange = () => {
    setIsLoading(true);
    setSearchParams((prevVal) => ({
      ...searchParams,
      orderBy: prevVal.get("orderBy") === "asc" ? "desc" : "asc",
    }));
  };

  if (error) {
    return <ErrorPage error={error} />;
  }

  return isLoading ? (
    <div>
      <Loading />
    </div>
  ) : (
    <>
      <Flex>
        {slug && (
          <Text fontSize="xl" fontWeight="bold" minWidth="50%">
            Topic: {slug}
          </Text>
        )}
        <ArticleSort
          sortBy={sortBy}
          orderBy={orderBy}
          onSortChange={handleSortChange}
          onOrderChange={handleOrderChange}
        />
      </Flex>
      <ArticleList articles={articles} />
    </>
  );
}

export default ArticlesPage;
