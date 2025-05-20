import { Route, Routes } from "react-router";
import Articles from "./components/Articles";
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";
import Comments from "./components/Comments";
import { Box, Container, Flex } from "@chakra-ui/react";

import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";

function App() {
  return (
    <>
      <Header />
      <Box as="main" bg="gray.50" minHeight="100vh" pt={2}>
        {/* Centre All Container */}
        <Container maxW="1200px" px={2}>
          <Flex
            direction={{ base: "column", md: "row" }}
            minHeight="100vh"
            gap={4}
          >
            {/* Left Column */}
            <Box flex="1" bg="gray.100" p={6}>
              <LeftColumn />
            </Box>
            {/* Main Content - Centre */}
            <Box data-test-id="main-box" flex="4" bg="white" p={4}>
              <Routes>
                <Route path="/" element={<Articles />} />
                <Route
                  path="/articles/:articleId"
                  element={<SingleArticle />}
                />
                <Route
                  path="/articles/:articleId/comments"
                  element={<Comments />}
                />
              </Routes>
            </Box>
            {/* Right Column */}
            <Box flex="1" bg="gray.100" p={6}>
              <RightColumn />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default App;
