import { useState } from 'react';
import Stats from './Stats';
import Textarea from './Textarea';

export default function Container() {
	const [text, setText] = useState('');
	const numOfChars = text.length;
	const numOfWords = text.split(/\s/).filter((word) => word !== '').length;
	const remainingInstaChars = 280 - numOfChars;
	const remainingFbChars = 2200 - numOfChars;

	return (
		<main className="container">
			<Textarea text={text} setText={setText} />
			<Stats
				numOfChars={numOfChars}
				numOfWords={numOfWords}
				remainingInstaChars={remainingInstaChars}
				remainingFbChars={remainingFbChars}
			/>
		</main>
	);
}
