const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");

// __dirname works automatically in CommonJS
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

let data = "Initial Data from Server";

app.get("/getData", (req, res) => {
  res.send({ data });
});

// someone updated the data to the db - now we want to get the updated data
app.get("/updateData", (req, res) => {
  // simulate data update
  data = "Updated Data from Server at " + new Date().toLocaleTimeString();
  res.send({ data });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
