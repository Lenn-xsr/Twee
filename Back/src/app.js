const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const cors = require("cors");
const userRoute = require("./routes/user");

app.use(cors({ credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRoute);

http.listen(3000, () => {
  console.log("listening on *:3000");
  require("./socket/index");
});

module.exports = io;
