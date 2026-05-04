import express from "express";
import connectDB from "./utils/connectDB.js"; // ⚠️ add .js extension
import dns from 'node:dns';
import productRoutes from "./routes/product.route.js";
dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();

// connect database
connectDB();

// routes
app.get("/", (req, res) => {
  res.send("Hello from Node API server");
});



app.use(express.json());

app.use("/api/products", productRoutes);

// start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});