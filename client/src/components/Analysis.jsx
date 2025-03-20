export default function Analysis({ aiAnalysis }) {
	if (!aiAnalysis || Object.keys(aiAnalysis).length === 0) {
		return <p></p>;
	}

	const [name, analysis] = Object.entries(aiAnalysis)[0]; // Extract the first key-value pair
	const analysisDetails = Object.entries(analysis); // Convert object to an array of key-value pairs

	return (
		<div>
			<h2>{name} Analysis</h2>
			{analysisDetails.map(([key, value]) => (
				<p key={key}>
					<strong>{key.replace(/_/g, " ")}:</strong> {value}
				</p>
			))}
		</div>
	);
}
