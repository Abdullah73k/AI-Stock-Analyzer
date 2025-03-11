import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const API_KEY = process.env.ALPHAVANTAGE_API_KEY;
const BASE_URL = "https://www.alphavantage.co/query";

export async function getMonthly(symbol) {
	try {
		const response = await axios.get(BASE_URL, {
			params: {
				function: "TIME_SERIES_MONTHLY",
				symbol: symbol,
				apikey: API_KEY,
			},
		});
		const data = response.data["Monthly Time Series"];
		const latestWeek = data[0];
        return latestWeek;
	} catch (error) {
		console.log("Internal server error", error);
		throw error;
	}
}

export async function getIncomeStatement(symbol) {
	try {
        const response = await axios.get(BASE_URL, {
            params: {
                function: "INCOME_STATEMENT",
                symbol: symbol,
                apikey: API_KEY,
            }
        })
        const data = response.data["quarterlyReports"];
        const latestEarnings = data[0];
        return latestEarnings;
	} catch (error) {
		console.log("Internal server error", error);
		throw error;
	}
}

export async function getCashFlow(symbol) {
	try {
        const response = await axios.get(BASE_URL, {
            params: {
                function: "CASH_FLOW",
                symbol: symbol,
                apikey: API_KEY,
            }
        })
        const data = response.data["quarterlyReports"];
        const latestCashFlow = data[0];
        return latestCashFlow;
	} catch (error) {
		console.log("Internal server error", error);
		throw error;
	}
}

export async function getBalanceSheet(symbol) {
	try {
        const response = await axios.get(BASE_URL, {
            params: {
                function: "BALANCE_SHEET",
                symbol: symbol,
                apikey: API_KEY,
            }
        })
        const data = response.data["quarterlyReports"];
        const latestCashFlow = data[0];
        return latestCashFlow;
	} catch (error) {
		console.log("Internal server error", error);
		throw error;
	}
}

