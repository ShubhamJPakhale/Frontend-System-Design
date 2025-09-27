const express = require("express");
const spdy = require("spdy");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const CERT = `${__dirname}/certs`;
const server = spdy.createServer(
  {
    key: fs.readFileSync(path.join(CERT, "server.key")),
    cert: fs.readFileSync(path.join(CERT, "server.cert")),
  },
  app
);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
