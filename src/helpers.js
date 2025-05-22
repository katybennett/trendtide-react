export const isArticleAuthor = (loggedInUser, articleData) => {
  return loggedInUser && loggedInUser.username === articleData.author;
};

export const isCommentAuthor = (loggedInUser, commentData) => {
  return loggedInUser && loggedInUser.username === commentData.author;
};