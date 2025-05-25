import { Button, Card, Heading, Stack } from "@chakra-ui/react";
import { isCommentAuthor } from "../helpers";

function CommentList({
  comments,
  loggedInUser,
  onDeleteComment,
  deleteComment,
}) {
  return comments.map((comment, i) => (
    <Card.Root key={i} w="full" overflow="hidden" mb={4}>
      <Card.Body gap="2">
        <Card.Title>
          <Stack gap="2" align="flex-start">
            <Heading size="m">Comment by {comment.author}</Heading>
          </Stack>
        </Card.Title>
        <Card.Description>{comment.body}</Card.Description>

        {isCommentAuthor(loggedInUser, comment) && (
          <Button
            onClick={() => onDeleteComment(comment.comment_id)}
            isDisabled={deleteComment}
            size="sm"
            variant="outline"
            mt={2}
          >
            {deleteComment ? "Deleting..." : "Delete"}
          </Button>
        )}
      </Card.Body>
    </Card.Root>
  ));
}

export default CommentList;
