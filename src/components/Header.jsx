import {
  Heading,
  Highlight,
  Stack,
  Box,
  Text,
  Flex,
  Container,
} from "@chakra-ui/react";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import UserAvatar from "./UserAvatar";
import { Link } from "react-router";

function Header() {
  const { isLoggedIn, loggedInUser } = useContext(UserContext);

  return (
    <Box
      py="4"
      borderBottomWidth="1px"
      borderColor="border.disabled"
      color="fg.disabled"
    >
      <Container maxW="1200px">
        <Flex justify="space-between" align="center">
          <Heading size="3xl" letterSpacing="tight">
            <Link to={"/"}>
              <Highlight query="News" styles={{ color: "teal.600" }}>
                TrendTide News
              </Highlight>
            </Link>
          </Heading>

          <Flex align="center" gap={3}>
            {isLoggedIn ? (
              <>
                <Text>{loggedInUser.username}</Text>
                <UserAvatar loggedInUser={loggedInUser} />
              </>
            ) : (
              <Link to={"/users"}>
                <Text fontSize="xl" fontWeight="bold">
                  Log in
                </Text>
              </Link>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
