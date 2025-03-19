import {analyzeStock} from "../services/deepseek.js";
import {
	getBalanceSheet,
	getIncomeStatement,
	getMonthly,
	getCashFlow,
} from "../services/alphavantage.js";

let deepseekAnalysis;

export const postStockAnalysis = async (req, res) => {
	const { symbol } = req.body;
	try {
		const cashFlow = await getCashFlow(symbol);
		const incomeStatement = await getIncomeStatement(symbol);
		const balanceSheet = await getBalanceSheet(symbol);
		const monthly = await getMonthly(symbol);

		const response = await analyzeStock(
			balanceSheet,
			cashFlow,
			monthly,
			incomeStatement,
			symbol
		);
		deepseekAnalysis = response
	} catch (error) {
		console.log("Internal server error", error);
		res.status(500).json({ error: "Internal server error, couldn't analyze stock" });
	}
};

export const getStockAnalysis = (req, res) => {
	res.json(deepseekAnalysis);
}
