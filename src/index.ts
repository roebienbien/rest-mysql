import { config } from "./config";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

//routes
app.get("/", (_req, res) => {
  res.send("API is running");
});

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
