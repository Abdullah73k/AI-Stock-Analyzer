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
			<ResponsiveContainer width="50%" height={300}>
				<LineChart data={predictionData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="prediction" stroke="#8884d8" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
