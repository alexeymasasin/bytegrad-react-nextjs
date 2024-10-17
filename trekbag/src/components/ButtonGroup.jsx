import { buttonsArray } from '../lib/constants';
import Button from './Button';

export default function ButtonGroup() {
	return (
		<section className="button-group">
			{buttonsArray.map((text) => (
				<Button type="secondary" text={text} key={text} />
			))}
		</section>
	);
}
