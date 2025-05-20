import { Spinner, Text, VStack } from "@chakra-ui/react";

function Loading() {
  return (
    <div>
      <VStack colorPalette="teal">
        <Spinner color="colorPalette.600" />
        <Text color="colorPalette.600">Loading...</Text>
      </VStack>
    </div>
  );
}

export default Loading;
