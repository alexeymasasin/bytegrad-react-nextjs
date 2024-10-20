import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

export default function Sidebar({
	addItems,
	removeAll,
	resetAll,
	completeAll,
	incompleteAll,
}) {
	return (
		<div className="sidebar">
			<AddItemForm addItems={addItems} />
			<ButtonGroup
				removeAll={removeAll}
				resetAll={resetAll}
				completeAll={completeAll}
				incompleteAll={incompleteAll}
			/>
		</div>
	);
}
