import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./Routes/userRoute.js";
import authRoute from "./Routes/authRoute.js";

const app = express();
const port = 3001;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

const connectionToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connection to MongoDb is successful!');
    } catch (error) {
        console.error(error);
    }
}


app.use('/api', userRoute)

//Auth route
app.use('/api', authRoute)


app.listen('3001', () =>{
    connectionToDB();
    console.log(`Server started on port ${port}`);
})