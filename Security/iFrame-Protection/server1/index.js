const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const path = require("path");

const app = express();
env.config({ path: path.resolve(__dirname, "../../../.env") });

app.use(cors());
app.use(express.static("public"));

const PORT = process.env.Server1_PORT || 3000;

app.get("/page1", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/example1.html"));
});

app.get("/page2", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/example2.html"));
});

app.get("/page3", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/example3.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
