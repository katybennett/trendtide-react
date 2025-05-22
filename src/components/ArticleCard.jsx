import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router";

function ArticleCard({ article }) {
  return (
    <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
      <Image
        objectFit="cover"
        maxW="200px"
        src={article.article_img_url}
        alt="Article Image"
      />
      <Box>
        <Card.Body>
          <Card.Title fontSize={{ md: "24px" }}>{article.title}</Card.Title>
          <Card.Description>Click below to read more...</Card.Description>
          <HStack mt="4">
            <Badge>{article.topic}</Badge>
          </HStack>
        </Card.Body>
        <Card.Footer>
          <Button>
            <Link to={`/articles/${article.article_id}`}>Read Article</Link>
          </Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
}

export default ArticleCard;
