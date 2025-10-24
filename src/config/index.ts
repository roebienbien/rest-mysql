import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 1339,
  db: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.PASSWORD || "",
    name: process.env.NAME || "myapp_db",
  },
};
