import express from "express";
import { postStockAnalysis, getStockAnalysis } from "../controllers/dailyController.js";

const router = express.Router();

router.post("/daily", postStockAnalysis);
router.get("daily", getStockAnalysis)

export default router;