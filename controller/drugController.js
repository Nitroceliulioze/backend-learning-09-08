import drugModel from "../Models/drugModel.js";



export const createDrug = async (req, res) => {
    try {
        const newDrug = new drugModel(req.body)
        await newDrug.save();
        res.status(201).send('New User is created');
    } catch(error) {
        res.status(405).send(error)
        console.error('error');
    }
};

export const getAllDrugs = async (req,res) => {    
    try {
        const allDrugs = await drugModel.find();
        res.status(202).json(allDrugs);
    } catch (error) {
        console.error('error');
    }
};

export const getDrugById = async (req,res) => {    
    try {
        const drug = await drugModel.findById(req.params.id);
        res.status(200).json(drug);
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
