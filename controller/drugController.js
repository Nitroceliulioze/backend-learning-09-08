import drugModel from "../Models/drugModel.js";
import bcrypt from "bcrypt";



export const createDrug = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newDrug = new drugModel({
            ...req.body,
            password : hash,
        });
        await newDrug.save();
        res.status(201).send('New User is created');
    } catch(error) {
        res.status(405).send(error)
        console.error('error');
    }
};

export const getAllDrugs = async (req,res) => {    
    try {
        //cleaner way to find
        const allDrugs = await drugModel.find({}, {password: 0});
        res.status(202).json(allDrugs);
    } catch (error) {
        console.error('error');
    }
};

export const getDrugById = async (req,res) => {    
    try {
        const drug = await drugModel.findById(req.params.id);
        //destructuring
        const {password, ...remainingDrugData} = drug._doc;
        res.status(200).json(remainingDrugData);
    } catch (error) {
        console.error('error');
    }
};

export const deleteDrugById = async (req,res) => {    
    try {
        await drugModel.findByIdAndDelete(req.params.id);
        res.status(200).send(`Drug is deleted`)
    } catch (error) {
        console.error('error');
    }
};

export const updateDrug = async (req,res) => {    
    try {
        const updatedDrug = await drugModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedDrug);
    } catch (error) {
        console.error('error');
    }
};

export const deleteAllDrugs = async (req,res) => {    
    try {
        await drugModel.deleteMany(req.params.id);
        res.status(200).send(`All drugs are deleted`)
    } catch (error) {
        console.error('error');
    }
};
