export const isArticleAuthor = (loggedInUser, articleData) => {
  return loggedInUser && loggedInUser.username === articleData.author;
};

export const isCommentAuthor = (loggedInUser, commentData) => {
  return loggedInUser && loggedInUser.username === commentData.author;
};

export const formatArticle = (article) => {
  const createdAt = new Date(article.created_at);
  return {
    ...article,
    created_at_date: createdAt.toLocaleDateString("en-GB"),
  };
};
