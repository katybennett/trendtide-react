import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Error from "./Error";
import Loading from "./Loading";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((res) => {
        setArticles(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

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
      <Grid gap={6}>
        {articles.map((article, i) => (
          <GridItem key={i}>
            <ArticleCard article={article} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

export default Articles;
