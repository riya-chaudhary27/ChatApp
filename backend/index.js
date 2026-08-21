import dotenv from "dotenv"
dotenv.config()

import express from "express"

import connectDb from "./config/db.js"
import dns from "dns"
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";


import cors from "cors"
import userRouter from "./routes/user.routes.js"
import messageRouter from "./routes/message.routes.js"
import { app, server } from "./socket/socket.js"


//change DNS
dns.setServers(["1.1.1.1","8.8.8.8"]);



const port=process.env.PORT  || 5000

app.use(cors({
    origin:"https://chatapp-6c6q.onrender.com",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/message",messageRouter)



server.listen(port,()=>{
    connectDb()
    console.log("server started")
})

//   BRuOndsmYQ1Nzqj3

//  chaudharyriyakundu_db_user
