import express from "express";
import cors from "cors";
import router from './src/routes/dailyRoute.js'

const PORT = 3000;
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/stock", router)

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})