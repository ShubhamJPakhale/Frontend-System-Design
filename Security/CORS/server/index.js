const express = require("express");
const cors = require("cors");
const app = express();

// Route 1: No CORS → Will fail for cross-origin requests
app.get("/no-cors", (req, res) => {
  res.json({ message: "This endpoint has NO CORS setup" });
});

// Route 2: With CORS → Allows cross-origin requests from frontend
//app.use("/with-cors", cors({ origin: "http://localhost:3000" }));

var allowedOrigin = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("CORS error"));
    }
  },
};

app.use(cors(corsOptions));

app.get("/with-cors", (req, res) => {
  res.json({ message: "CORS enabled! Request successful 🎉" });
});

app.listen(4000, () => console.log("Backend running on port 4000"));
