import ChartPrediction from "./components/Chart";
import Input from "./components/Input";
import Analysis from "./components/Analysis";
import axios from "axios";
import { useState } from "react";

function App() {
	const [response, setResponse] = useState([]);
	const [symbol, setSymbol] = useState("");

	const onInputChange = (event) => {
		setSymbol(event.target.value);
	};

	const onButtonClick = async (event) => {
		event.preventDefault();

		try {
			await axios.post("http://localhost:3000/api/stock/daily", { symbol });

			const { data } = await axios.get("http://localhost:3000/api/stock/daily");
			console.log("Data fetched from backend: ", data);

			setResponse(data);
			console.log(response)
			setSymbol("");
		} catch (error) {
			console.error("Failed to get Deepseek response", error);
		}
	};

	return (
		<>
			<h1>STOCK AI</h1>
			<p>
				Enter a valid symbol below to get a well-structured long-term analysis
				from our reasoning model.
			</p>
			<Input onClick={onButtonClick} onChange={onInputChange} value={symbol}/>
			<Analysis aiAnalysis={response} />
			<ChartPrediction />
		</>
	);
}

export default App;
