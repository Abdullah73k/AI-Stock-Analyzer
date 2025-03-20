import express from "express";
import { postStockAnalysis } from "../controllers/dailyController.js";

const router = express.Router();

router.post("/daily", postStockAnalysis);


export default router;