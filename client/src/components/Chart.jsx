import {
	ResponsiveContainer,
	Legend,
	Line,
	CartesianGrid,
	LineChart,
	Tooltip,
	XAxis,
	YAxis
} from "recharts";

export default function ChartPrediction({ aiAnalysis }) {
	const predictionData = aiAnalysis?.prediction || [];

	return (
		<ResponsiveContainer width="100%" height={300}>
			<LineChart data={predictionData}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="month" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="prediction" stroke="#8884d8" />
			</LineChart>
		</ResponsiveContainer>
	);
}
