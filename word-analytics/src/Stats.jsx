export default function Stats() {
	return (
		<section className="stats">
			<Stat statNumber={0} statName="words" />
			<Stat statNumber={0} statName="characters" />
			<Stat statNumber={280} statName="instagram" />
			<Stat statNumber={2200} statName="facebook" />
		</section>
	);
}

function Stat({ statNumber, statName }) {
	return (
		<section className="stat">
			<span className="stat__number">{statNumber}</span>
			<h2 className="second-heading">{statName}</h2>
		</section>
	);
}
