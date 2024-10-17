import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

export default function Sidebar({ addItems }) {
	return (
		<div className="sidebar">
			<AddItemForm addItems={addItems} />
			<ButtonGroup />
		</div>
	);
}
