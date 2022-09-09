import express from "express";
import { createDrug, getAllDrugs, getDrugById, deleteDrugById, updateDrug } from "../controller/drugController.js";


const router = express.Router();

router.post('/create', createDrug)

router.get('/get', getAllDrugs);

router.get('/get/:id', getDrugById);

router.delete('/delete/:id', deleteDrugById);

router.put('/update/:id', updateDrug);

export default router;