import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react";

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
          <Card.Description>Article description will be here</Card.Description>
          <HStack mt="4">
            <Badge>{article.topic}</Badge>
          </HStack>
        </Card.Body>
        <Card.Footer>
          <Button>
            <a href={`/articles/${article.article_id}`}>Read Article</a>
          </Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
}

export default ArticleCard;
