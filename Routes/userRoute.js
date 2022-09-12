import express from "express";
import { getAllUsers, getUserById, deleteUserById, updateUser, deleteAllUsers } from "../controller/userController.js";
import { verifySessionTokenAdmin, verifySessionTokenUser } from "../authCheck/authCheck.js";

const router = express.Router();


router.get('/get', verifySessionTokenAdmin, getAllUsers);

router.get('/get/:id', verifySessionTokenUser, getUserById);

router.delete('/delete/:id', verifySessionTokenUser, deleteUserById);

router.put('/update/:id', verifySessionTokenUser, updateUser);

router.delete('/delete', verifySessionTokenAdmin, deleteAllUsers);

export default router;