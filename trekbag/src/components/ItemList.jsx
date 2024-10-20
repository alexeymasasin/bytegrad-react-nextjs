import Select from 'react-select';
import EmptyView from './EmptyView';

export default function ItemList({ items, deleteItem, toggleItem }) {
	return (
		<ul className="item-list">
			{items.length === 0 && <EmptyView />}

			{items.length > 0 ? (
				<section className="sorting">
					<Select />
				</section>
			) : null}

			{items.map((item) => (
				<Item
					toggleItem={toggleItem}
					deleteItem={deleteItem}
					key={item.id}
					item={item}
				/>
			))}
		</ul>
	);
}

function Item({ item, deleteItem, toggleItem }) {
	return (
		<li className="item">
			<label>
				<input
					onChange={() => toggleItem(item.id)}
					type="checkbox"
					checked={item.packed}
				/>
				{item.name}
			</label>
			<button onClick={() => deleteItem(item.id)}>❌</button>
		</li>
	);
}
