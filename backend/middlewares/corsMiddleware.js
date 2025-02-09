const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3001",
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};

module.exports = cors(corsOptions);
