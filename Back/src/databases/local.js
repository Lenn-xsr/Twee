const dbLocal = require("db-local");
const { Schema } = new dbLocal({ path: `${__dirname}/local` });

const Post = Schema("Posts", {
  _id: { type: String },
  user: { type: Object, required: true },
  comment: { type: String, required: true },
  attachs: { type: Array },
  likes: { type: Array },
  reposts: { type: Array },
  replys: { type: Array },
});

const User = Schema("Users", {
  _id: { type: String },
  username: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String },
});

module.exports = { Post, User };
