import { useContext, useEffect, useRef, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

import {
  deleteCommentByCommentId,
  getArticle,
  getCommentsPerArticle,
  postCommentArticle,
  updateArticleWaves,
} from "../../api";

import { useParams } from "react-router";
import Loading from "../Loading";
import CommentList from "../CommentList";
import { UserContext } from "../../contexts/UserContext";
import { isArticleAuthor } from "../../helpers";

function SingleArticle() {
  const params = useParams();
  const { articleId } = params;

  const { loggedInUser } = useContext(UserContext);

  const [articleData, setArticleData] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasWaved, setHasWaved] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [postSuccessMessage, setPostSuccessMessage] = useState("");
  const [deleteComment, setDeleteComment] = useState(false);

  const commentListRef = useRef(null);

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

  useEffect(() => {
    if (commentListRef.current) {
      commentListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [comments]);

  const handleViewCommentsClick = () => {
    getCommentsPerArticle(articleId)
      .then((comments) => {
        setComments(comments);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const handlePostCommentClick = () => {
    if (!loggedInUser.username) {
      alert("Please log in to comment");
      return;
    }

    if (newComment.trim().length === 0) {
      alert("Comment cannot be empty");
      return;
    }

    postCommentArticle(articleId, loggedInUser.username, newComment)
      .then((comment) => {
        setComments((previousComments) => [comment, ...previousComments]);
        setNewComment("");
        setPostSuccessMessage("Comment posted successfully!");
        setTimeout(() => setPostSuccessMessage(""), 3000);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const handleDeleteComment = (commentId) => {
    setDeleteComment(true);

    deleteCommentByCommentId(commentId)
      .then(() => {
        setComments((previousComments) =>
          previousComments.filter((comment) => comment.comment_id !== commentId)
        );
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setDeleteComment(false);
      });
  };

  const handleWaveClick = () => {
    if (!loggedInUser.username) {
      alert("Please log in to wave");
      return;
    }

    const value = hasWaved ? -1 : 1;

    updateArticleWaves(articleId, value)
      .then((updatedArticle) => {
        setArticleData((existingArticle) => ({
          ...existingArticle,
          ...updatedArticle,
        }));

        setHasWaved((hasWaved) => !hasWaved);
      })
      .catch((err) => {
        setError(err);
      });
  };

  if (error) {
    return <Error error={error} />;
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
          <Text>{articleData.created_at_date}</Text>

          <Card.Description textStyle="lg">{articleData.body}</Card.Description>

          <HStack mt="4" ref={commentListRef}>
            <Badge>Total comments: {articleData.comment_count}</Badge>
            <Badge>Total waves: {articleData.votes}</Badge>
          </HStack>
        </Card.Body>

        <Card.Footer gap="2">
          <Button onClick={handleViewCommentsClick} variant="solid">
            Comments
          </Button>

          {!isArticleAuthor(loggedInUser, articleData) && (
            <Button
              variant="ghost"
              onClick={handleWaveClick}
              color={!hasWaved ? "gray.800" : "teal.600"}
              fontWeight={!hasWaved ? "normal" : "bold"}
            >
              {!hasWaved ? "Wave" : "Waved"}
            </Button>
          )}
        </Card.Footer>
      </Card.Root>

      {comments.length > 0 && (
        <>
          {postSuccessMessage && (
            <Text color="teal.600" mb={2}>
              {postSuccessMessage}
            </Text>
          )}
          <Textarea
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button onClick={handlePostCommentClick} variant="ghost" mb={4}>
            Comment
          </Button>
          <CommentList
            comments={comments}
            loggedInUser={loggedInUser}
            onDeleteComment={handleDeleteComment}
            deleteComment={deleteComment}
          />
        </>
      )}
    </>
  );
}

export default SingleArticle;
