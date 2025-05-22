import { Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function LeftColumn() {
  return (
    <Stack direction={{ base: "row", md: "column" }}>
      <Link to={"/articles"}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Articles
        </Text>
      </Link>
      <Link to={"/users"}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Users
        </Text>
      </Link>
    </Stack>
  );
}

export default LeftColumn;
