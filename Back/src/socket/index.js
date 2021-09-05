const io = require("../app");
const { Post } = require("../databases/local");
const { walkSync } = require("../utils");

io.on("connection", (socket) => {
  console.log(`[SKT] User connected ${socket.id}`);

  io.emit("POSTS", Post.find());

  // Events

  for (const file of walkSync(__dirname + "/events")) {
    const event = require(file);
    const eventName = Object.keys(event)[0];

    socket.on(eventName, (response) =>
      event[eventName]({ response, io, socket })
    );
  }
});
