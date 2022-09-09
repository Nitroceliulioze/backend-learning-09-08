import mongoose from "mongoose";

const drugSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    brand: {
        type: String,
        required: true,        
    },
    country: {
        type: String,
        required: true,
    },
    pharmacodynamics: {
        type: String,        
    },
    pharmacokinetics: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    }
})

export default mongoose.model('drug', drugSchema)