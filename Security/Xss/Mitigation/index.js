const express = require("express");
const env = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

env.config({ path: path.resolve(__dirname, "../../.env") });

// setheaders to prevent xss attacks - CSP - Content Security Policy
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    'default-src "self";' +
      "script-src 'self' 'nonce-random123' 'unsafe-inline';" // allowing scripts from self and http://unsecure.com (you can add any other trusted domains here)
    //   'style-src "self" https://fonts.googleapis.com;' + // allowing styles from self and google fonts
    //   'font-src "self" https://fonts.gstatic.com;' + // allowing fonts from self and google fonts
    //   'img-src "self" data:;' // allowing images from self and data scheme
  );
  next();
});

app.use(express.static(path.join(__dirname, "./Public"))); // here we are serving static files from public folder
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at port ${process.env.PORT || 3000}`);
});

/* we will get below errors in console when we try to load unsecure scripts or connect to unsecure endpoints - 
(index):1 The source list for the Content Security Policy directive 'default-src' contains an invalid source: '"self"'. It will be ignored.Understand this error
(index):1 The source list for the Content Security Policy directive 'script-src' contains an invalid source: '"self"'. It will be ignored.Understand this error
(index):1 The Content-Security-Policy directive 'script-src' contains 'style-src' as a source expression. Did you want to add it as a directive and forget a semicolon?Understand this error
(index):1 The source list for the Content Security Policy directive 'script-src' contains an invalid source: '"self"'. It will be ignored.Understand this error
(index):1 The source list for the Content Security Policy directive 'font-src' contains an invalid source: '"self"'. It will be ignored.Understand this error
(index):1 The source list for the Content Security Policy directive 'img-src' contains an invalid source: '"self"'. It will be ignored.Understand this error
Refused to connect to 'http://localhost:3000/.well-known/appspecific/com.chrome.devtools.json' because it violates the following Content Security Policy directive: "default-src 'none'". Note that 'connect-src' was not explicitly set, so 'default-src' is used as a fallback.
Understand this error
(index):1 Refused to load the script 'http://unsecure.com/abc.js' because it violates the following Content Security Policy directive: "script-src 'self' style-src 'self' https://fonts.googleapis.com". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback.
 */
