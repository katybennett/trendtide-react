import { Heading, Highlight, Stack, Box, Text, Flex } from "@chakra-ui/react";

function Header() {
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
          <Text>Welcome Guest</Text>
        </Flex>
      </Box>
    </Stack>
  );
}

export default Header;
