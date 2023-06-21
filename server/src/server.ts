import { Server as SocketIoServer } from "socket.io";
import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new SocketIoServer(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("User connected with Socket ID:", socket.id);

  socket.on("textChange", (textContent) => {
    socket.broadcast.emit("newText", textContent);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
