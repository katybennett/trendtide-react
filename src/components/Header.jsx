import { Heading, Highlight, Stack, Text, Box } from "@chakra-ui/react";

function Header() {
  return (
    <Stack>
      {/* <Box bg="grey" width="100%" padding="4" color="white">
        <>Sign in</>
        <> | Search Bar</>
      </Box> */}
      <Box
        p="4"
        borderWidth="1px"
        borderColor="border.disabled"
        color="fg.disabled"
      >
        <Heading size="3xl" letterSpacing="tight">
          <Highlight query="News" styles={{ color: "teal.600" }}>
            TrendTide News
          </Highlight>
        </Heading>

        {/* <Text fontSize="md" color="fg.muted">
        Chakra UI is a simple, modular and accessible component library that
        gives you the building blocks you need.Trends
      </Text> */}
      </Box>
    </Stack>
  );
}

export default Header;
