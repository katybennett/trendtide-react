import { useContext, useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useParams } from "react-router";
import {
  getArticle,
  getCommentsPerArticle,
  updateArticleWaves,
} from "../api";
import Loading from "./Loading";
import CommentList from "./CommentList";
import { UserContext } from "../contexts/UserContext";
import { isArticleAuthor } from "../helpers";

function SingleArticle() {
  const params = useParams();
  const { articleId } = params;

  const [articleData, setArticleData] = useState(null);
  const [comments, setComments] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { loggedInUser } = useContext(UserContext);
  const [hasWaved, setHasWaved] = useState(false)

  useEffect(() => {
    getArticle(articleId)
      .then((article) => {
        setArticleData(article);
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

  const handleWaveClick = () => {
    const value = hasWaved ? -1 : 1;

    updateArticleWaves(articleId, value)
      .then((updatedArticle) => {
        setArticleData((existingArticle) => ({
          ...existingArticle,
          ...updatedArticle,
        }));

        setHasWaved(hasWaved => !hasWaved)

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
            <Badge>Total comments: {articleData.comment_count}</Badge>
            <Badge>Total waves: {articleData.votes}</Badge>
          </HStack>
        </Card.Body>

        <Card.Footer gap="2">
          <Button onClick={handleViewCommentsClick} variant="solid">
            View comments
          </Button>
          <Button variant="ghost">Comment</Button>
          {!isArticleAuthor(loggedInUser, articleData) && (
            <Button 
              variant="ghost"
              onClick={handleWaveClick}
              color={!hasWaved ? "gray.800" : "teal.600"} >
              {!hasWaved ? "Wave" : "Waved"}
            </Button>
          )}
        </Card.Footer>
      </Card.Root>

      <>{comments.length > 0 && <CommentList comments={comments} />}</>
    </>
  );
}

export default SingleArticle;
