const express = require("express");
const env = require("dotenv");
const path = require("path");

const app = express();

env.config({ path: path.resolve(__dirname, "../../.env") });

const redirectToHttps = (req, res, next) => {
  if (req.headers["x-forwarded-proto"] !== "https") {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
};

app.use(redirectToHttps);

// middleware to set security headers
app.use((req, res, next) => {
  res.setHeader("Referrer-Policy", "no-referrer"); // No referrer information is sent
  res.removeHeader("X-Powered-By"); // Remove X-Powered-By header - which is the technology stack used for the server
  res.setHeader("X-Content-Type-Options", "nosniff"); // Prevent MIME type sniffing
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload;"
  ); // Enforce HTTPS for one year - including subdomains
  next();
});

app.get("/list", (req, res) => {
  res.json({
    data: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ],
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at port ${process.env.PORT || 3000}`);
});
