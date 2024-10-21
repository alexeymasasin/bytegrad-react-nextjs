import { useState } from 'react';
import Select from 'react-select';
import EmptyView from './EmptyView';

const sortingOptions = [
	{
		label: 'Sort by default',
		value: 'default',
	},
	{
		label: 'Sort by packed',
		value: 'packed',
	},
	{
		label: 'Sort by unpacked',
		value: 'unpacked',
	},
];

export default function ItemList({ items, deleteItem, toggleItem }) {
	const [sortBy, setSortBy] = useState('default');
	const sortedItems = [...items].sort((a, b) => {
		if (sortBy === 'packed') {
			return b.packed - a.packed;
		}
		if (sortBy === 'unpacked') {
			return a.packed - b.packed;
		}
		return;
	});

	return (
		<ul className="item-list">
			{items.length === 0 && <EmptyView />}

			{items.length > 0 ? (
				<section className="sorting">
					<Select
						onChange={(option) => setSortBy(option.value)}
						defaultValue={sortingOptions[0]}
						options={sortingOptions}
					/>
				</section>
			) : null}

			{sortedItems.map((item) => (
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
