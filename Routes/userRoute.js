import express from "express";
import { getAllUsers, getUserById, deleteUserById, updateUser, deleteAllUsers } from "../controller/userController.js";
import { verifySessionToken } from "../Middleware/authCheck.js";

const router = express.Router();


router.get('/get', verifySessionToken, getAllUsers);

router.get('/get/:id', verifySessionToken, getUserById);

router.delete('/delete/:id', verifySessionToken, deleteUserById);

router.put('/update/:id', verifySessionToken, updateUser);

router.delete('/delete', verifySessionToken, deleteAllUsers);

export default router;