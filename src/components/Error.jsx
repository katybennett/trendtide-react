import { Flex } from "@chakra-ui/react";

function Error({ error }) {
  console.error(error);
  return (
    <Flex
      data-test-id="articles-component"
      direction={{ base: "column", md: "row" }}
      minHeight="100vh"
    >
      Oops! Something went wrong
    </Flex>
  );
}

export default Error;
