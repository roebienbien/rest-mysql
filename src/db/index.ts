import mysql from "mysql2/promise";
import { config } from "../config";

export const db = await mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.user,
});
