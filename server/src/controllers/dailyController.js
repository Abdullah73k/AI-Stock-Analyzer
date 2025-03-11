import deepseek from "../services/deepseek.js";
import {
	getBalanceSheet,
	getIncomeStatement,
	getMonthly,
	getCashFlow,
} from "../services/alphavantage.js";

export const getStock = async (req, res) => {
    const { symbol } = req.body;
    try {
        const result = await getMonthly(symbol);
        console.log(result)
        res.json(result);
    } catch (error) {
        console.log("Internal server error", error);
        res.status(500).json({ error: "Internal server error" });
    }
}