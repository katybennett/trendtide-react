import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  Flex,
  LinkBox,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ArticleList from "../ArticleList";
import { getArticles } from "../../api";
import Loading from "../Loading";
import ErrorPage from "./ErrorPage";
import { Link } from "react-router-dom";

function HomePage() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles({ sortBy: "created_at", order: "desc", limit: 3 })
      .then((res) => {
        setArticles(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <ErrorPage error={error} />;
  }

  return isLoading ? (
    <Loading />
  ) : (
    <Box bg="gray.50" pt={10}>
      <Container maxW="3xl" pb={10}>
        <Stack spacing={6} textAlign="center">
          <Heading as="h1" size="2xl" color="gray.800">
            Welcome!
          </Heading>
          <Text fontSize="xl" color="gray.600">
            At TrendTide, we go beyond the headlines to bring you sharp
            insights, bold ideas, and the cultural currents shaping our world.
          </Text>
          <Text fontSize="md" color="gray.600">
            Whether it’s emerging tech, clever cooking tips, useful coding
            knowledge, or stories that spark real conversation. This is where
            trend meets truth.
          </Text>
          <Text fontWeight="semibold" color="gray.700">
            Stay curious. Stay sharp. And surf the top of the wave!
          </Text>
        </Stack>
      </Container>
      <Heading as="h2" size="xl" color="gray.800" p={2}>
        Most Recent Articles:
      </Heading>
      <ArticleList articles={articles} />
      <Flex alignItems="center" justifyContent="center">
        <Button mt={8} p={6} variant="ghost" >
          <Link to={`/articles`}>View all articles</Link>
        </Button>
      </Flex>
    </Box>
  );
}

export default HomePage;
