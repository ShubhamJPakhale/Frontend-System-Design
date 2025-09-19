const express = require("express");
const env = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const app = express();
app.use(bodyParser.json());

env.config({ path: path.resolve(__dirname, "../../.env") });

// create server for socket.io
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log("Connection established");

  socket.on("chat message", (msg) => {
    console.log("received Message : " + msg);
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at port ${process.env.PORT || 3000}`);
});
