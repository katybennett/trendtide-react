import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://trendtidenews.onrender.com/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};

export const getArticle = (articleId) => {
  return newsApi.get(`/articles/${articleId}`).then((res) => {
    return res.data.article;
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

export const incrementArticleWaves = (articleId) => {
  return newsApi
    .patch(`/articles/${articleId}`, { inc_votes: 1 })
    .then((res) => {
      return res.data.updatedArticle;
    });
};

// export const getUser = (username) => {
//   return newsApi.get(`/users/${username}`).then((res) => {
//     return res.data.users;
//   });
// };
