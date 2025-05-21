import { Heading, Highlight, Stack, Box, Text, Flex } from "@chakra-ui/react";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

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
            <Highlight query="News" styles={{ color: "teal.600" }}>
              TrendTide News
            </Highlight>
          </Heading>
          <Text>
            Welcome {isLoggedIn ? loggedInUser.username : "guest"}
            {isLoggedIn ? (
              <img
                src={loggedInUser.avatar_url}
                alt={`Avatar of ${loggedInUser.username}`}
              />
            ) : null}
          </Text>
        </Flex>
      </Box>
    </Stack>
  );
}

export default Header;
