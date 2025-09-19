const express = require("express");
const env = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

env.config({ path: path.resolve(__dirname, "../../.env") });

app.get("/ssedata", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  res.write(`data : Welcome to SSE\n\n`);

  const intervalId = setInterval(() => {
    const date = new Date();
    res.write(`data: ${date.toISOString()}\n\n`);
  }, 5000);

  req.on("close", () => {
    clearInterval(intervalId);
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at port ${process.env.PORT || 3000}`);
});
