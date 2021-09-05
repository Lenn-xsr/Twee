const io = require("../app");
const { Post } = require("../databases/local");

io.on("connection", (socket) => {
  console.log(`[SKT] User connected ${socket.id}`);

  io.emit("POSTS", Post.find());

  socket.on("POST", (object) => {
    io.emit("POST", object);
  });

  socket.on("signin", (object) => {
    socket.session = object;
    console.log(`[SKT] User signin ${socket.id}`);
  });
});
