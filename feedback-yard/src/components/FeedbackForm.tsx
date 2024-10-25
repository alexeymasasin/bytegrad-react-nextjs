import { useState } from 'react';
import { MAX_CHARACTERS } from './../../lib/constants';

export default function FeedbackForm() {
	const [text, setText] = useState('');

	return (
		<form className="form">
			<textarea
				name=""
				id="feedback-textarea"
				placeholder="*placeholder*"
				spellCheck={false}
				value={text}
				onChange={(e) => {
					const newText = e.target.value;
					if (newText.length > MAX_CHARACTERS) {
						return;
					}
					setText(newText);
				}}
			></textarea>
			<label htmlFor="feedback-textarea">
				Enter your feedback here, remember to #hashtag the company
			</label>

			<div>
				<p className="u-italic">{MAX_CHARACTERS - text.length}</p>
				<button>
					<span>Submit</span>
				</button>
			</div>
		</form>
	);
}
