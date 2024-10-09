import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

export default function CountButton({ setCount, type, locked }) {
	const handleClick = () => {
		setCount((prev) => {
			if (type === 'minus') {
				const newCount = prev - 1;
				if (newCount < 0) {
					return 0;
				}
				return newCount;
			} else {
				const newCount = prev + 1;
				if (newCount > 5) {
					return 5;
				}
				return newCount;
			}
		});
	};

	return (
		<button disabled={locked} className="count-btn" onClick={handleClick}>
			{type === 'minus' ? (
				<MinusIcon className="count-btn-icon" />
			) : (
				<PlusIcon className="count-btn-icon" />
			)}
		</button>
	);
}
