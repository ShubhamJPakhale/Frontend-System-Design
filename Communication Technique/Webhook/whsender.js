const crypto = require("crypto");
const axios = require("axios");

const secret = "myWebhookSecret";

function signPayload(payload) {
  return crypto
    .createHmac("sha256", secret)
    .update(JSON.stringify(payload))
    .digest("hex");
}

async function sendWebhook() {
  const data = { orderId: 101, status: "Placed" };
  const signature = signPayload(data);

  try {
    const res = await axios.post("http://localhost:3000/webhook", data, {
      headers: { "X-Signature": signature },
    });
    console.log("✅ Webhook sent:", res.status, res.data);
  } catch (err) {
    console.error("❌ Webhook failed:", err.message);
  }
}

sendWebhook();
