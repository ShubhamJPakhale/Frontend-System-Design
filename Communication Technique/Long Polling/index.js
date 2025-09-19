const express = require("express");
const env = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// __dirname works automatically in CommonJS
env.config({ path: path.resolve(__dirname, "../../.env") });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

let waitingClientsforUpdate = []; // Store waiting clients for long polling data update
let data = "Initial Data from Server";

app.get("/getData", (req, res) => {
  // If data has changed, send it immediately
  // Otherwise, hold the request until data changes
  if (data !== req.query.lastData) {
    res.json({ data });
  } else {
    waitingClientsforUpdate.push(res);
  }
});

app.get("/updateData", (req, res) => {
  // update data and notify all waiting clients and pop them from the array
  data = req.query.data;

  while (waitingClientsforUpdate.length > 0) {
    const clientRes = waitingClientsforUpdate.pop();
    clientRes.json({ data });
  }

  res.json({ status: "Data updated successfully" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at port ${process.env.PORT || 3000}`);
});

// note - run server - npm run start
// note - open browser - http://localhost:3000
// note - open another tab - http://localhost:3000/updateData?data=NewDataFromClient
// note - go back to first tab and see the data is updated automatically
// note - open another tab - http://localhost:3000/updateData?data=AnotherDataFromClient
// note - go back to first tab and see the data is updated automatically

// in between connection is kept alive by browser itself
// if connection is lost, client will reconnect automatically
// if server restarts, client will reconnect automatically
