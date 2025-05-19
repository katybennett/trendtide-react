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
