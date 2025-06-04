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
    <Card.Root flexDirection={{ base: "column", sm: "row" }} overflow="hidden">
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={article.article_img_url}
        alt="Article Image"
      />
      <Box width="100%">
        <Card.Body p={{ base: 4, sm: 6 }}>
          <Card.Title fontSize={{ md: "24px" }}>{article.title}</Card.Title>
          <Card.Description>Click below to read more...</Card.Description>
          <HStack mt="4">
            <Badge fontSize="sm">
              <Link to={`/topics/${article.topic}`}>{article.topic}</Link>
            </Badge>
          </HStack>
        </Card.Body>
        <Card.Footer
          data-test-id="card-footer"
          flexDirection={{ base: "column", xl: "row" }}
          justifyContent="space-between"
          p={{ base: 4, sm: 6 }}
          pt={0}
          alignItems={{
            base: "flex-start",
            xl: "center",
          }}
        >
          <Button mb={2}>
            <Link to={`/articles/${article.article_id}`}>Read Article</Link>
          </Button>
          <Flex gap={5}>
            <HStack>
              <Image
                rounded="md"
                src="../wave.png"
                width="6"
                alt="Wave icon"
                display="inline"
                mr="1"
              />
              {article.votes}
            </HStack>
            <HStack>
              <Image
                rounded="md"
                src="../comments.png"
                width="6"
                alt="Comments icon"
                display="inline"
                mr="1"
              />
              {article.comment_count}
            </HStack>
            <span>{article.created_at_date}</span>
          </Flex>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
}

export default ArticleCard;
