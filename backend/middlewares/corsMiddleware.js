import cors from "cors";

const corsOptions = {
  origin: "http://localhost:3001",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

export default cors(corsOptions);
