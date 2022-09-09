import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userModel from "./userModel.js";

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

app.post('/create', async (req, res) => {
    try {
        const newUser = new userModel(req.body)
        await newUser.save();
        res.status(201).send('New User is created');
    } catch(error) {
        res.status(405).send(error)
        console.error('error');
    }
})


app.listen('3001', () =>{
    connectionToDB();
    console.log(`Server started on port ${port}`);
})