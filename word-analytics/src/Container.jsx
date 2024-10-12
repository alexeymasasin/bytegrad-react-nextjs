import { useState } from 'react';
import Stats from './Stats';
import Textarea from './Textarea';
import { FB_MAX_CHARS, IG_MAX_CHARS } from './constants';

export default function Container() {
	const [text, setText] = useState('');

	const stats = {
		numOfChars: text.length,
		numOfWords: text.split(/\s/).filter((word) => word !== '').length,
		remainingInstaChars: IG_MAX_CHARS - text.length,
		remainingFbChars: FB_MAX_CHARS - text.length,
	};

	return (
		<main className="container">
			<Textarea text={text} setText={setText} />
			<Stats stats={stats} />
		</main>
	);
}
