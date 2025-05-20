import { Box, Flex, Grid, GridItem, Spinner, Text, VStack } from "@chakra-ui/react";
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
    <Flex
      data-test-id="articles-component"
      direction={{ base: "column", md: "row" }}
      minHeight="100vh"
    >
      {/* Left Column */}

      <Box flex="1" bg="gray.100" p={6}>
        <Text fontSize="xl" fontWeight="bold">
          Home
        </Text>
        <Text mt={4}>Content here comming soon!</Text>
      </Box>

      {/* Right Column */}
      <Box flex="3" bg="white" p={6}>
        <Text fontSize="xl" fontWeight="bold">
          {/* Articles */}
        </Text>
        <Grid gap={6}>
          {articles.map((article, i) => (
            <GridItem>
              <ArticleCard key={i} article={article} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
}

export default Articles;
