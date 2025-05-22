import { Card, Heading, Stack } from "@chakra-ui/react";

function CommentList({ comments }) {
  return comments.map((comment, i) => (
    <Card.Root key={i} w="full" overflow="hidden" mb={4}>
      <Card.Body gap="2">
        <Card.Title>
          <Stack gap="2" align="flex-start">
            <Heading size="m">Comment by {comment.author}</Heading>
          </Stack>
        </Card.Title>
        <Card.Description>{comment.body}</Card.Description>
      </Card.Body>
    </Card.Root>
  ));
}

export default CommentList;
