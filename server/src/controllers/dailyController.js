import deepseek from "../services/deepseek.js";
import {
	getBalanceSheet,
	getIncomeStatement,
	getMonthly,
	getCashFlow,
} from "../services/alphavantage.js";

async function analyzeStock(
	balanceSheet,
	cashFlow,
	monthly,
	incomeStatement,
	symbol
) {
	const prompt = `
    You are an expert stock market analyzer. 
    Given the information provided about the ${symbol} stock, 
    make an expert analysis detailing the following:
    1. A summary of the stock's current price movement, including volatility.
    2. A review of the company's financial health, including revenue growth, profitability, and earnings per share.
    3. Market sentiment based on analyst ratings and news impacting the company.
    4. An outlook on its future, including growth potential and industry trends.
    5. A summary of key risks, including company risks and economic/industry risks.
    6. An analysis of the stock’s current valuation, using metrics like P/E ratio and P/B ratio.
    
    Finally, provide a conclusion explaining why or why not this stock is a good investment at the moment.
    
    Response format:
    You MUST return a valid JSON object ONLY. No extra text before or after the JSON. Do NOT include any markdown anywhere in the response. The response should strictly follow this format:
    
    {
      "summary": "Short summary of the stock's current state.",
      "financial_health": "Key insights on profitability, revenue growth, and EPS.",
      "market_sentiment": "Overview of investor sentiment, analyst ratings, and news.",
      "future_outlook": "Predictions based on growth potential and industry trends.",
      "risks": "Potential company-specific and economic/industry risks.",
      "valuation": "Analysis of stock valuation using P/E, P/B, and other relevant metrics.",
      "conclusion": "Final verdict on whether this stock is a good investment at the moment."
    }
    
    Ensure all responses strictly follow this format.`;

	const completion = await deepseek.chat.completions.create({
		model: "deepseek-chat",
		messages: [
			{
				role: "system",
				content: prompt,
			},
			{
				role: "user",
				content: `Monthly time series of ${symbol}: ${monthly}, balance sheet of ${symbol}: ${balanceSheet}, income statement of ${symbol}: ${incomeStatement}, cash flow of ${symbol}: ${cashFlow}`,
			},
		],
		temperature: 0.1,
		max_tokens: 1000,
	});

	let responseText = completion.choices[0].message.content;
	responseText = responseText.replace(/```json|```/g, "").trim();
	console.log("Raw API Response:", responseText);
	return JSON.parse(responseText);
}

export const getStock = async (req, res) => {
	const { symbol } = req.body;
	try {
		try {
			let cashFlow = await getCashFlow(symbol);
			let incomeStatement = await getIncomeStatement(symbol);
			let balanceSheet = await getBalanceSheet(symbol);
			let monthly = await getMonthly(symbol);
		} catch (error) {
			console.log("Couldn't get stock info");
			res.status(500).json({ message: "error" });
		}

		const response = await analyzeStock(
			balanceSheet,
			cashFlow,
			monthly,
			incomeStatement,
			symbol
		);
		console.log(response);
		res.json(response);
	} catch (error) {
		console.log("Internal server error", error);
		res.status(500).json({ error: "Internal server error" });
	}
};
