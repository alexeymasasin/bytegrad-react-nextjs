import Button from './Button';

export default function ButtonGroup({
	removeAll,
	resetAll,
	completeAll,
	incompleteAll,
}) {
	const secondaryButtons = [
		{
			text: 'Mark all as completed',
			onClick: completeAll,
		},
		{
			text: 'Mark all as incompleted',
			onClick: incompleteAll,
		},
		{
			text: 'Reset to initial',
			onClick: resetAll,
		},
		{
			text: 'Remove all items',
			onClick: removeAll,
		},
	];

	return (
		<section className="button-group">
			{secondaryButtons.map((button) => {
				return (
					<Button
						key={button.text}
						buttonType="secondary"
						onClick={button.onClick}
					>
						{button.text}
					</Button>
				);
			})}
		</section>
	);
}
