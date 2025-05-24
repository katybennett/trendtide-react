import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../../api";
import { Box, Heading } from "@chakra-ui/react";
import Loading from "../Loading";
import ArticleList from "../ArticleList";

function Topics() {
  const { slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticlesByTopic(slug)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [slug]);

  return (
    <Box>
      <Heading mb={4}>Articles about {slug}</Heading>
      {isLoading ? <Loading /> : <ArticleList articles={articles} />}
    </Box>
  );
}

export default Topics;
