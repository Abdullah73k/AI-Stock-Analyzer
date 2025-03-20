export default function Input({onClick, onChange, value, isLoading}) {
    return (
        <form onSubmit={onClick} className="form">
            <input type="text" onChange={onChange} value={value} name="symbol" required/>
            <button type="submit" disabled={isLoading}>Analyze</button>
        </form>
    )
}