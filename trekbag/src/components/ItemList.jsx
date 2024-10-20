export default function ItemList({ items, deleteItem, toggleItem }) {
	return (
		<ul>
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
