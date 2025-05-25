import { Text } from "@chakra-ui/react";

function Error({ error }) {
  console.error(error);
  return <Text>Oops! Something went wrong</Text>;
}

export default Error;
