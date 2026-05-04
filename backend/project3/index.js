import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./utils/connectDB.js";

const app = express();
const PORT = 3000;

// check env
console.log("MONGO_URL:", process.env.MONGO_URL);

// connect DB
connectDB();

app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});