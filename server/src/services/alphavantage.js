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
        if (!response.data || Object.keys(response.data).length === 0) {
            throw new Error("Invalid API response, check the symbol input");
          }
          
        const data = response.data["Monthly Time Series"];
        const dates = Object.keys(data);
        const latestDate = dates[0];
        const latestMonthData = data[latestDate];
        return { date: latestDate, ...latestMonthData };
    } catch (error) {
        console.log("Internal server error, couldn't get monthly time series", error);
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
        if (!response.data || Object.keys(response.data).length === 0) {
            throw new Error("Invalid API response, check the symbol input");
          }
          
        const data = response.data["quarterlyReports"];
        const date = Object.keys(data);
        const latestDate = date[0];
        const latestIncomeStatement = data[latestDate]
        return { ...latestIncomeStatement };
    } catch (error) {
        console.log("Internal server error, couldn't get income statement", error);
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
        if (!response.data || Object.keys(response.data).length === 0) {
            throw new Error("Invalid API response, check the symbol input");
          }
          
        const data = response.data["quarterlyReports"];
        const date = Object.keys(data);
        const latestDate = date[0];
        const latestCashFlow = data[latestDate];
        return { ...latestCashFlow };
    } catch (error) {
        console.log("Internal server error, couldn't get cash flow", error);
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
        if (!response.data || Object.keys(response.data).length === 0) {
            throw new Error("Invalid API response, check the symbol input");
          }
          
        const data = response.data["quarterlyReports"];
        const date = Object.keys(data);
        const latestDate = date[0];
        const latestBalanceSheet = data[latestDate];
        return { ...latestBalanceSheet };
    } catch (error) {
        console.log("Internal server error, couldn't get balance sheet", error);
        throw error;
    }
}

