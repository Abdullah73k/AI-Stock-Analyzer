import express from "express";
import cors from "cors";

const PORT = 3000;
const app = express();

app.use(cors({ origin: "http://localhost:5173" }))

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})