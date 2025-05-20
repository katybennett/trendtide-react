import { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useParams } from "react-router";
import { getArticle, getCommentsPerArticle } from "../api";
import Loading from "./Loading";
import CommentList from "./CommentList";

function SingleArticle() {
  const params = useParams();
  const { articleId } = params;

  const [articleData, setArticleData] = useState(null);
  const [comments, setComments] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticle(articleId)
      .then((res) => {
        setArticleData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const handleViewCommentsClick = () => {
    getCommentsPerArticle(articleId)
      .then((res) => {
        setComments(res);
      })
      .catch((err) => {
        setError(err);
      });
  };

  if (error) {
    return <Error />;
  }

  return isLoading ? (
    <div>
      <Loading />
    </div>
  ) : (
    <>
      <Card.Root w="full" overflow="hidden" border="none">
        <Card.Body gap="2">
          <Card.Title>
            <Stack gap="2" align="flex-start">
              <Heading size="4xl">{articleData.title}</Heading>
            </Stack>
          </Card.Title>

          <Image src={articleData.article_img_url} alt="Article Image" />

          <Text textStyle="md" fontWeight="medium">
            by {articleData.author}
          </Text>
          {/* <Text>Created at: {articleData.created_at}</Text> */}

          {/* <Card.Description> */}

          <Text textStyle="lg">{articleData.body}</Text>

          {/* </Card.Description> */}
          <HStack mt="4">
            <Badge>Total Comments: {articleData.comment_count}</Badge>
            <Badge>Total Votes: {articleData.votes}</Badge>
          </HStack>
        </Card.Body>

        <Card.Footer gap="2">
          <Button onClick={handleViewCommentsClick} variant="solid">
            View comments
          </Button>
          <Button variant="ghost">Comment</Button>
          <Button variant="ghost">Vote</Button>
        </Card.Footer>
      </Card.Root>

      <>{comments.length > 0 && <CommentList comments={comments} />}</>
    </>
  );
}

export default SingleArticle;
