import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const deepseek = new OpenAI({
    baseURL: process.env.DEEPSEEK_BASE_URL,
    apiKey: process.env.DEEPSEEK_API_KEY
})

export default deepseek;