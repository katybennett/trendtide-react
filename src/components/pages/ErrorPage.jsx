import { Text } from "@chakra-ui/react";

function ErrorPage({ error }) {
  const errorToDisplay =
    error?.response?.data?.msg ?? "Oops! Something went wrong";

  return <Text>{errorToDisplay}</Text>;
}

export default ErrorPage;
