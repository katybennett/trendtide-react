import { Box, Heading, Text, Stack, Container } from '@chakra-ui/react';

function HomePage() {
  return (
    <Box bg="gray.50" py={20}>
      <Container maxW="3xl">
        <Stack spacing={6} textAlign="center">
          <Heading as="h1" size="2xl" color="gray.800">
            Welcome!
          </Heading>
          <Text fontSize="xl" color="gray.600">
            At TrendTide, we go beyond the headlines to bring you sharp insights, bold ideas, and the cultural currents shaping our world.
          </Text>
          <Text fontSize="md" color="gray.600">
          Whether it’s emerging tech, clever cooking tips, useful coding knowledge, or stories that spark real conversation. This is where trend meets truth.
          </Text>
          <Text fontWeight="semibold" color="gray.700">
          Stay curious. Stay sharp.
          And surf the top of the wave! 
          </Text>
        </Stack>
      </Container>
    </Box>

  );
}

export default HomePage;
