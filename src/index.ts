import { config } from "./config";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/index";

// dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use(userRoutes);

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
