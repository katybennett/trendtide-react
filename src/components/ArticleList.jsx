import { Grid, GridItem } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";

function ArticleList({ articles }) {
  return (
    <Grid gap={6}>
      {articles.map((article, i) => (
        <GridItem key={i}>
          <ArticleCard article={article} />
        </GridItem>
      ))}
    </Grid>
  );
}

export default ArticleList;
