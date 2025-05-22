import { Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router";

function LeftColumn() {
  return (
    <Stack direction={{ base: "row", md: "column" }}>
      <Link to={"/articles"}>
        <Text fontSize="xl" fontWeight="bold">
          Articles
        </Text>
      </Link>
      <Text fontSize="xl" fontWeight="bold">
        Topics
      </Text>
      <Link to={"/users"}>
        <Text fontSize="xl" fontWeight="bold">
          Users
        </Text>
      </Link>
    </Stack>
  );
}

export default LeftColumn;
