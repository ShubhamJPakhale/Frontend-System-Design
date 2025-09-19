const crypto = require("crypto");
const express = require("express");
const bodyParser = require("body-parser");

const secret = "myWebhookSecret";
const app = express();
app.use(bodyParser.json());

function verifySignature(payload, signature) {
  const expected = crypto
    .createHmac("sha256", secret)
    .update(JSON.stringify(payload))
    .digest("hex");
  return expected === signature;
}

app.post("/webhook", (req, res) => {
  const signature = req.headers["x-signature"];
  console.log("Received Payload:", req.body);
  console.log("Received Signature:", signature);
  if (!verifySignature(req.body, signature)) {
    return res.status(401).send("Invalid signature");
  }
  res.status(200).send("Webhook verified");
});

app.listen(3000, () => console.log("Receiver running on 3000"));
