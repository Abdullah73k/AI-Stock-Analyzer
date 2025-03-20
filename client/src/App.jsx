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

	let Chart;
	if (response?.prediction?.length > 0) {
		Chart = <ChartPrediction aiAnalysis={response}/>
	} else if (response?.prediction?.length == 0){
		Chart = <p>Couldn't get chart prediction, please try again at a later time.</p>
	}

	const onButtonClick = async (event) => {
		event.preventDefault();
		setIsLoading(true);

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
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<div className="heading">
				<h1 className="title">STOCK AI</h1>
				<p>
					Enter a valid symbol below to get a well-structured long-term analysis
					and a price prediction chart from our reasoning model.
				</p>
			</div>

			{isLoading ? <Loader /> : null}
			{isLoading ? null : <Input onClick={onButtonClick} onChange={onInputChange} value={symbol} />}
			<Analysis aiAnalysis={response} />
			{isLoading ? null : Chart}
		</>
	);
}

export default App;
