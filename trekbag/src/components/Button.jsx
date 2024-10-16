export default function Button({ type, text }) {
	return (
		<button className={`btn ${type === 'secondary' ? 'btn--secondary' : ''}`}>
			{text}
		</button>
	);
}
