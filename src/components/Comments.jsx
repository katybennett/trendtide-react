import { useParams } from "react-router";
import { getCommentsPerArticle } from "../api";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import CommentList from "./CommentList";
import ErrorPage from "./pages/ErrorPage";

function Comments() {
  const params = useParams();
  const { articleId } = params;

  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsPerArticle(articleId)
      .then((res) => {
        setComments(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <ErrorPage error={error} />;
  }

  return isLoading ? (
    <div>
      <Loading />
    </div>
  ) : (
    <CommentList comments={comments} />
  );
}

export default Comments;
