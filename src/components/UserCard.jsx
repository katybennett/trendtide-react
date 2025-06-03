import { Button, Card, Image } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

function UserCard({ user }) {
  const [hasWaved, setHasWaved] = useState(false);
  const { loggedInUser, isLoggedIn, setLoggedInUser } = useContext(UserContext);

  const logInDisabled = isLoggedIn && user.username !== loggedInUser.username;
  const logInText =
    isLoggedIn && loggedInUser.username === user.username
      ? "Log out"
      : "Log in";

  const handleWaveClick = () => {
    if (!loggedInUser.username) {
      alert("Please log in to wave");
      return;
    } else {
      setHasWaved((hasWaved) => !hasWaved);
    }
  };

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
        <Button
          variant="ghost"
          onClick={handleWaveClick}
          color={!hasWaved ? "gray.800" : "teal.600"}
          fontWeight={!hasWaved ? "normal" : "bold"}
        >
          {!hasWaved ? "Wave" : "Waved"}
        </Button>
        <Button
          onClick={() => setLoggedInUser(!isLoggedIn ? user : {})}
          disabled={logInDisabled}
        >
          {logInText}
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

export default UserCard;
