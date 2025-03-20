export default function Analysis({ aiAnalysis }) {
    const symbols = Object.keys(aiAnalysis);
  return <div>{symbols.map((symbol) => (
    <p key={symbol}>{aiAnalysis[symbol]}</p>
  ))}</div>;
}
