import express from "express";
const router = express.Router();
import authController from "../controllers/auth.controller.js";
//POST http://localhost:500/api/v1/auth/signup
router.post("/signup", authController.signUp);

export default router;
