const postsresolvers = require("./posts");
const usersresolvers = require("./users");
const commentsresolvers = require("./comments");

module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postsresolvers.Query,
  },
  Mutation: {
    ...postsresolvers.Mutation,
    ...usersresolvers.Mutation,
    ...commentsresolvers.Mutation,
  },
};
