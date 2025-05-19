import { Container, Grid, GridItem } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";

function Articles({ articles }) {
  return (
    <Container>
      <Grid gap={6}>
        {articles.map((article, i) => (
          <GridItem>
            <ArticleCard key={i} article={article} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}

export default Articles;
