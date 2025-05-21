import { Button, Card, Image, Stack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

function UserCard({ user }) {

  const { setLoggedInUser } = useContext(UserContext);

  function handleLogin() {
    setLoggedInUser(user);
  }

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
            User description
          </Card.Description> */}
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">Wave</Button>
        <Button onClick={handleLogin}>Log in</Button>
      </Card.Footer>
    </Card.Root>
  );
}

export default UserCard;
