const http = require("http").createServer();
const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (message) => {
    let name = socket.id.split("");
    io.emit(
      "message",
      `😃 ${name[0].toUpperCase()}.${name[
        name.length - 1
      ].toUpperCase()}:  ${message}`
    );
  });
});

http.listen(8080, () => console.log("listening on http://localhost:8080"));
