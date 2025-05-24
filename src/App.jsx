import { Route, Routes } from "react-router";
import ArticlesPage from "./components/ArticlesPage";
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";
import Comments from "./components/Comments";
import { Box, Container, Flex } from "@chakra-ui/react";

import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import Users from "./components/Users";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import HomePage from "./components/HomePage";
import Topics from "./components/Topics";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const isLoggedIn = Object.keys(loggedInUser).length > 0;

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isLoggedIn }}>
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
                  <Route path="/" element={<HomePage />} />
                  <Route path="/articles" element={<ArticlesPage />} />
                  <Route
                    path="/articles/:articleId"
                    element={<SingleArticle />}
                  />
                  <Route path="/topics/:slug" element={<Topics />} />
                  <Route
                    path="/articles/:articleId/comments"
                    element={<Comments />}
                  />
                  <Route path="/users" element={<Users />} />
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
    </UserContext.Provider>
  );
}

export default App;
