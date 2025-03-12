import express from "express";
import { getStockAnalysis } from "../controllers/dailyController.js";

const router = express.Router();

router.get("/daily", getStockAnalysis)

export default router;