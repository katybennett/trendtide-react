import { Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function LeftColumn() {
  return (
    <Stack direction={{ base: "row", md: "column" }}>
      <Link to={"/articles"}>
        <Text fontSize="xl" fontWeight="bold">
          Articles
        </Text>
      </Link>
      <Link to={"/users"}>
        <Text fontSize="xl" fontWeight="bold">
          Surfers
        </Text>
      </Link>
    </Stack>
  );
}

export default LeftColumn;