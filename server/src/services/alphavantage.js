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
		const dates = Object.keys(data);
        const latestDate = dates[0];
        const latestMonthData = data[latestDate];
        return {date: latestDate, ...latestMonthData};
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
        const date = Object.keys(data);
        const latestDate = date[0];
        const latestIncomeStatement = data[latestDate]
        return {...latestIncomeStatement};
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
        const date = Object.keys(data);
        const latestDate = date[0];
        const latestCashFlow = data[latestDate];
        return {...latestCashFlow};
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
        const date = Object.keys(data);
        const latestDate = date[0];
        const latestBalanceSheet = data[latestDate];
        return {...latestBalanceSheet};
	} catch (error) {
		console.log("Internal server error", error);
		throw error;
	}
}

