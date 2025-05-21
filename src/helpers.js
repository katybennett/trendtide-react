export const isArticleAuthor = (loggedInUser, articleData) => {
  return loggedInUser && loggedInUser.username === articleData.author;
};
