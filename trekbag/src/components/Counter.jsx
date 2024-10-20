export default function Counter({ items }) {
	return (
		<p>
			{items.filter((i) => i.packed !== false).length} / {items.length} items
			packed
		</p>
	);
}
