export default function Stats({
	numOfChars,
	numOfWords,
	remainingInstaChars,
	remainingFbChars,
}) {
	return (
		<section className="stats">
			<Stat statNumber={numOfWords} statName="words" />
			<Stat statNumber={numOfChars} statName="characters" />
			<Stat statNumber={remainingInstaChars} statName="instagram" />
			<Stat statNumber={remainingFbChars} statName="facebook" />
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
