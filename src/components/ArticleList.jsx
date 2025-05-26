import { Grid, GridItem, Text } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";

function ArticleList({ articles }) {
  return (
    <Grid gap={6}>
      {articles.length === 0 ? (
        <Text>No articles found</Text>
      ) : (
        articles.map((article, i) => (
          <GridItem key={i}>
            <ArticleCard article={article} />
          </GridItem>
        ))
      )}
    </Grid>
  );
}

export default ArticleList;
