import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const deepseek = new OpenAI({
	baseURL: process.env.DEEPSEEK_BASE_URL,
	apiKey: process.env.DEEPSEEK_API_KEY,
});

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
    7. provide a conclusion explaining why or why not this stock is a good investment at the moment.

	Finally provide a price prediction of the stock for next 6 months. If the month now is march then you start from April and go till september.
    
    Response format:
    You MUST return a valid JSON object ONLY. No extra text before or after the JSON. Do NOT include any markdown anywhere in the response. The response should strictly follow this format:
    {}
    {
      "summary": "Short summary of the stock's current state.",
      "financial_health": "Key insights on profitability, revenue growth, and EPS.",
      "market_sentiment": "Overview of investor sentiment, analyst ratings, and news.",
      "future_outlook": "Predictions based on growth potential and industry trends.",
      "risks": "Potential company-specific and economic/industry risks.",
      "valuation": "Analysis of stock valuation using P/E, P/B, and other relevant metrics.",
      "conclusion": "Final verdict on whether this stock is a good investment at the moment."
    }
	{
	 prediction: [
  {
    "month": "Page A",
    "prediction": 4000,
    "amt": 2400
  },
  {
    "month": "Page A",
    "prediction": 4000,
    "amt": 2400
  },
  {
    "month": "Page A",
    "prediction": 4000,
    "amt": 2400
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

	}
    
    Ensure all responses strictly follow this format.`;

	const completion = await deepseek.chat.completions.create({
		model: "deepseek-reasoner",
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
		max_tokens: 2000,
	});

	let responseText = completion.choices[0].message.content;
	responseText = responseText.replace(/```json|```/g, "").trim();
	console.log("Raw API Response:", responseText);
	return JSON.parse(responseText);
}

export default deepseek;
export { analyzeStock };
