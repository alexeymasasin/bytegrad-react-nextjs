import { useRef, useState } from 'react';
import Button from './Button';

export default function AddItemForm({ addItems }) {
	const [inputValue, setInputValue] = useState('');
	const inputRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();

		// basic validation
		if (!inputValue) {
			inputRef.current.focus();
			return;
		}

		// handling the change, nulling the input & focus back
		addItems(inputValue);
		setInputValue('');
		inputRef.current.focus();
	};

	return (
		<form onSubmit={submitHandler}>
			<h2>Add an item</h2>
			<input
				type="text"
				ref={inputRef}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				autoFocus
			/>
			<Button type="primary" text="Add to list" />
		</form>
	);
}
