import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router";

function ArticleCard({ article }) {
  return (
    <Card.Root flexDirection="row" overflow="hidden">
      <Image
        objectFit="cover"
        maxW="200px"
        src={article.article_img_url}
        alt="Article Image"
      />
      <Box width="100%">
        <Card.Body>
          <Card.Title fontSize={{ md: "24px" }}>{article.title}</Card.Title>
          <Card.Description>Click below to read more...</Card.Description>
          <HStack mt="4">
            <Badge>
              <Link to={`/topics/${article.topic}`}>{article.topic}</Link>
            </Badge>
          </HStack>
        </Card.Body>
        <Card.Footer
          data-test-id="card-footer"
          flexDirection={{ base: "column", sm: "row", md: "column", xl: "row" }}
          justifyContent="space-between"
          alignItems={{
            base: "flex-start",
            sm: "center",
            md: "flex-start",
            xl: "center",
          }}
        >
          <Button mb={2}>
            <Link to={`/articles/${article.article_id}`}>Read Article</Link>
          </Button>
          {/* <Text fontSize="sm"> */}
          <Flex gap={5}>
            <span>
              <Image
                rounded="md"
                src="../wave.png"
                width="6"
                alt="Wave icon"
                display="inline"
                mr="1"
              />
              {article.votes}
            </span>
            <span>
              <Image
                rounded="md"
                src="../comments.png"
                width="6"
                alt="Comments icon"
                display="inline"
                mr="1"
              />
              {article.comment_count}
            </span>
            <span>{article.created_at_date}</span>
          </Flex>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
}

export default ArticleCard;
