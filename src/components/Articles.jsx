import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
    }).catch((err) => {
      console.log(err)
    })
  }, []);

  return (
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
