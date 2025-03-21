// import {
// 	ResponsiveContainer,
// 	Legend,
// 	Line,
// 	CartesianGrid,
// 	LineChart,
// 	Tooltip,
// 	XAxis,
// 	YAxis,
// } from "recharts";

// export default function ChartPrediction({ aiAnalysis }) {
// 	// Ensure prediction values are numbers
// 	const predictionData = aiAnalysis?.prediction?.map(({ month, prediction }) => ({
// 		month,
// 		prediction: parseFloat(prediction.replace("$", "")), // Convert to number
// 	})) || [];

// 	return (
// 		<div className="chart">
// 			<ResponsiveContainer width="%" height={300}>
// 				<LineChart data={predictionData}>
// 					<CartesianGrid strokeDasharray="3 3" />
// 					<XAxis dataKey="month" />
// 					<YAxis domain={['dataMin', 'dataMax']} />
// 					<Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
// 					<Line type="monotone" dataKey="prediction" stroke="#8884d8" />
// 				</LineChart>
// 			</ResponsiveContainer>
// 		</div>
// 	);
// }




import {
	ResponsiveContainer,
	Legend,
	Line,
	CartesianGrid,
	LineChart,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

export default function ChartPrediction({ aiAnalysis }) {

	const predictionData = aiAnalysis?.prediction || [];

	return (
		<div className="chart">
			<ResponsiveContainer width="90%" height={300}>
				<LineChart data={predictionData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" />
					<YAxis domain={['dataMin', 'dataMax']} />
					<Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
					<Line type="monotone" dataKey="prediction" stroke="#8884d8" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

