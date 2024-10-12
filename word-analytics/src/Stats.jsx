export default function Stats({ stats }) {
	return (
		<section className="stats">
			<Stat statNumber={stats.numOfWords} statName="words" />
			<Stat statNumber={stats.numOfChars} statName="characters" />
			<Stat statNumber={stats.remainingInstaChars} statName="instagram" />
			<Stat statNumber={stats.remainingFbChars} statName="facebook" />
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
