import { Route, Routes } from "react-router";
import Articles from "./components/Articles";
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:articleId" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
