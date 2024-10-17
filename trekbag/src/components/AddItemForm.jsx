import { useRef, useState } from 'react';
import Button from './Button';

export default function AddItemForm({ setItems }) {
	const [inputValue, setInputValue] = useState('');
	const inputRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();

		const newItem = {
			name: inputValue,
			packed: false,
			id: new Date().getTime(),
		};

		if (!inputValue) {
			inputRef.current.focus();
			return;
		}

		setItems((prev) => {
			return [...prev, newItem];
		});
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
