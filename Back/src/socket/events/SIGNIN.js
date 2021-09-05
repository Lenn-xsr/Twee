exports.SIGNIN = ({ response, socket }) => {
  socket.session = response;
  console.log(`[SKT] User signin ${socket.id}`);
};
