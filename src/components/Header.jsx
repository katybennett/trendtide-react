import { Heading, Highlight, Stack, Box, Text, Flex } from "@chakra-ui/react";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import UserAvatar from "./UserAvatar";
import { Link } from "react-router";

function Header() {
  const { isLoggedIn, loggedInUser } = useContext(UserContext);

  return (
    <Stack>
      <Box
        p="4"
        borderWidth="1px"
        borderColor="border.disabled"
        color="fg.disabled"
      >
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
      </Box>
    </Stack>
  );
}

export default Header;
