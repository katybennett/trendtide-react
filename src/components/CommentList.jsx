import { Card, Heading, Stack } from "@chakra-ui/react";

function CommentList({ comments }) {
  return comments.map((comment, i) => (
    <div key={i}>
      <Card.Root maxW="xl" overflow="hidden">
        <Card.Body gap="2">
          <Card.Title>
            <Stack gap="2" align="flex-start">
              <Heading size="m">Comment:</Heading>
            </Stack>
          </Card.Title>
          <Card.Description>{comment.body}</Card.Description>
        </Card.Body>
      </Card.Root>
    </div>
  ));
}

export default CommentList;
