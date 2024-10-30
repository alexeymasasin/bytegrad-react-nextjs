import { useState } from 'react';
import { MAX_CHARACTERS } from './../../lib/constants';

type FeedbackFormProps = {
	onAddToList: (text: string) => void;
};

export default function FeedbackForm({ onAddToList }: FeedbackFormProps) {
	const [text, setText] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newText = e.target.value;
		if (newText.length > MAX_CHARACTERS) {
			return;
		}
		setText(newText);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onAddToList(text);
		setText('');
	};

	return (
		<form onSubmit={handleSubmit} className="form">
			<textarea
				name=""
				id="feedback-textarea"
				placeholder="*placeholder*"
				spellCheck={false}
				value={text}
				onChange={handleChange}
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
