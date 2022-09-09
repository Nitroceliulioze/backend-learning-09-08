import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import drugRoute from "./Routes/drugRoute.js";

const app = express();
const port = 3001;

dotenv.config();

app.use(express.json());

const connectionToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connection to MongoDb is successful!');
    } catch (error) {
        console.error(error);
    }
}

//create 
app.use('/api', drugRoute)


app.listen('3001', () =>{
    connectionToDB();
    console.log(`Server started on port ${port}`);
})