export default function Input({onClick, onChange, value}) {
    return (
        <form onSubmit={onClick} className="form">
            <input type="text" onChange={onChange} value={value} name="symbol" required/>
            <button type="submit">Analyze</button>
        </form>
    )
}