import {
  Badge,
  Box,
  Button,
  Card,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
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
            <Badge>
              <Link to={`/topics/${article.topic}`}>{article.topic}</Link>
            </Badge>
          </HStack>
        </Card.Body>
        <Card.Footer flexDirection="column" alignItems="flex-start">
          <Button mb={2}>
            <Link to={`/articles/${article.article_id}`}>Read Article</Link>
          </Button>
          <Text fontSize="sm">
            <span>votes: {article.votes} | </span>
            <span>Comments:{article.comment_count} | </span>
            <span>created at:{article.created_at_date}</span>
          </Text>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
}

export default ArticleCard;
