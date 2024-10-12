import { useState } from 'react';
import Warning from './Warning';

export default function Textarea({ text, setText }) {
	const [warnMsg, setWarnMsg] = useState('');

	const handleChange = (e) => {
		let newText = e.target.value;
		if (newText.includes('<script>')) {
			setWarnMsg('Please remove <script> tags');
			newText = newText.replace(/<script>/g, '');
		} else if (newText.includes('@')) {
			setWarnMsg('Please remove @ symbols');
			newText = newText.replace(/@/g, '');
		} else {
			setWarnMsg('');
		}
		setText(newText);
	};

	return (
		<div className="textarea">
			<textarea
				placeholder="Enter your text..."
				spellCheck="false"
				value={text}
				onChange={handleChange}
				className="textarea"
			/>
			{warnMsg && <Warning warnText={warnMsg} />}
		</div>
	);
}
