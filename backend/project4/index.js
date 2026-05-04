import express from "express"
import connectDB from "./utils/connectDB.js"
import dns from 'node:dns';
import userRouter from "./routes/user.route.js";

dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express()

connectDB()

app.use(express.json())

app.use("/auth",userRouter)

app.listen(3000,()=>{
    console.log("Server is Connected")
})