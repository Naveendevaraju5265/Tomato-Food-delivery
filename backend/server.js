import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"




// app config
const app = express()
const port = 5000


//  middleware
app.use(express.json())
app.use(cors())



//  db conncetion
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
})

// mongodb+srv://srnithin04:dtEUTyZB5OsJr79M@cluster0.gonmk.mongodb.net/?
