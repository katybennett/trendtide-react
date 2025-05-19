import { useEffect, useState } from "react";
import Articles from "./components/Articles";
import { getArticles } from "./api";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
    });
  }, []);

  return (
    <>
      <Articles articles={articles} />
    </>
  );
}

export default App;
