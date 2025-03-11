import deepseek from "../services/deepseek.js";
import {
	getBalanceSheet,
	getIncomeStatement,
	getMonthly,
	getCashFlow,
} from "../services/alphavantage.js";

export const getStock = async (req, res) => {
    const symbol = req.body;
    try {
        const result = await getBalanceSheet(Symbol);
        console.log(result)
    } catch (error) {
        console.log("Internal server error", error);
        throw error;
    }
}