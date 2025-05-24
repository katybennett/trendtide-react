import axios from "axios";
import { formatArticle } from "./helpers";

const newsApi = axios.create({
  baseURL: "https://trendtidenews.onrender.com/api",
});

export const getArticles = ({ sortBy, topic } = {}) => {
  return newsApi.get("/articles", { params: { sortBy, topic } }).then((res) => {
    return res.data.articles.map(formatArticle);
  });
};

// export const getTopics = () => {
//   return newsApi.get("/topics").then((res) => {
//     return res.data.topics;
//   });
// };

// export const getArticlesByTopic = (topicSlug) => {
//   return newsApi
//     .get("/articles", { params: { topic: topicSlug } })
//     .then((res) => {
//       return res.data.articles.map(formatArticle);
//     });
// };

export const getArticle = (articleId) => {
  return newsApi.get(`/articles/${articleId}`).then((res) => {
    return formatArticle(res.data.article);
  });
};

export const getCommentsPerArticle = (articleId) => {
  return newsApi.get(`/articles/${articleId}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const getUsers = () => {
  return newsApi.get("/users").then((res) => {
    return res.data.users;
  });
};

export const updateArticleWaves = (articleId, value) => {
  return newsApi
    .patch(`/articles/${articleId}`, { inc_votes: value })
    .then((res) => {
      return res.data.updatedArticle;
    });
};

export const postCommentArticle = (articleId, username, body) => {
  return newsApi
    .post(`/articles/${articleId}/comments`, { username: username, body: body })
    .then((res) => {
      return res.data.comment;
    });
};

export const deleteCommentByCommentId = (commentId) => {
  return newsApi.delete(`/comments/${commentId}`).catch((err) => {
    console.log(err);
  });
};
