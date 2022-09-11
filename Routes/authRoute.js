import express from "express";
import { createUser, loginUser } from "../controller/authController.js";

const router = express.Router();

//creation
router.post('/register', createUser);

//login
router.post('/login', loginUser);

export default router;