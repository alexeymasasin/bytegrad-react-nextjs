import Button from './Button';

export default function AddItemForm() {
	return (
		<form>
			<h2>Add an item</h2>
			<input type="text" />
			<Button type="primary" text="Add to list" />
		</form>
	);
}
