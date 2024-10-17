import Button from './Button';

const buttonsArray = [
	'Mark all as complete',
	'Mark all as incomplete',
	'Reset',
	'Remove all items',
];

export default function ButtonGroup() {
	return (
		<section className="button-group">
			{buttonsArray.map((text) => (
				<Button type="secondary" text={text} key={text} />
			))}
		</section>
	);
}
