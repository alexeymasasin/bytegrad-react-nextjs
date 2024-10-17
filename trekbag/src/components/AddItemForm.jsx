import { useState } from 'react';
import Button from './Button';

export default function AddItemForm({ setItems }) {
	const [inputValue, setInputValue] = useState('');

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				const newItem = { name: inputValue, packed: false, id: 4 };

				setItems((prev) => {
					return [...prev, newItem];
				});
				setInputValue('');
			}}
		>
			<h2>Add an item</h2>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<Button type="primary" text="Add to list" />
		</form>
	);
}
