import {analyzeStock} from "../services/deepseek.js";
import {
	getBalanceSheet,
	getIncomeStatement,
	getMonthly,
	getCashFlow,
} from "../services/alphavantage.js";


export const postStockAnalysis = async (req, res) => {
	const { symbol } = req.body;

	if (!symbol || typeof symbol !== "string") {
		return res.status(400).json({ error: "Invalid stock symbol provided" });
	}

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
		res.json(response);
	} catch (error) {
		console.log("Internal server error", error);
		res.status(500).json({ error: "Internal server error, couldn't analyze stock" });
	}
};

