const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const path = require("path");

const app = express();
env.config({ path: path.resolve(__dirname, "../../../.env") });

app.use(cors());
app.use(express.static("public"));

const PORT = process.env.Server2_PORT || 3000;

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "frame-ancestors 'none'");

  res.cookie("sessionID", "12345", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  next();
});

app.get("/iframe-website1", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/iframe-protection1.html"));
});

app.get("/iframe-website2", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/iframe-protection2.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
