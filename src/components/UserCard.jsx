import { Button, Card, Image, Stack } from "@chakra-ui/react";

function UserCard({ user }) {
  return (
  
      <Card.Root size="sm">
        <Card.Body gap="2">
          <Image
            border="2px solid teal"
            src={user.avatar_url}
            boxSize="150px"
            borderRadius="full"
            fit="Avatar"
            alt="User Avatar"
          />
          <Card.Title mb="2">{user.name}</Card.Title>
          {/* <Card.Description>
            USer description
          </Card.Description> */}
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button variant="outline">Wave</Button>
          <Button>Log in</Button>
        </Card.Footer>
      </Card.Root>

  );
}

export default UserCard;
