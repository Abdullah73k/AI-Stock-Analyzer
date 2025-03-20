import ChartPrediction from "./components/Chart";
import Input from "./components/Input";
import Analysis from "./components/Analysis";
import Loader from "./components/Loader";
import axios from "axios";
import { useState } from "react";

function App() {
	const [response, setResponse] = useState([]);
	const [symbol, setSymbol] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const onInputChange = (event) => {
		setSymbol(event.target.value);
	};

	const onButtonClick = async (event) => {
		setIsLoading(true);
		event.preventDefault();

		try {
			const data = await axios.post("http://localhost:3000/api/stock/daily", {
				symbol,
			});

			if (!data) {
				throw new Error("Couldn't get a response from the backend");
			}
			setResponse(data.data);
			console.log(data);
		} catch (error) {
			console.error("Failed to get Deepseek response", error);
		}
	};

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<h1>STOCK AI</h1>
					<p>
						Enter a valid symbol below to get a well-structured long-term
						analysis from our reasoning model.
					</p>
					<Input
						onClick={onButtonClick}
						onChange={onInputChange}
						value={symbol}
					/>
					<Analysis aiAnalysis={response} />
					<ChartPrediction />{" "}
				</>
			)}
		</>
	);
}

export default App;
