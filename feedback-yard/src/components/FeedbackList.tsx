import { TriangleUpIcon } from '@radix-ui/react-icons';

export default function FeedbackList() {
	return (
		<ol className="feedback-list">
			<li className="feedback">
				<button>
					<TriangleUpIcon />
					<span>593</span>
				</button>
				<div>
					<p>B</p>
				</div>

				<div>
					<p>AlexeyMasasin</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque
						repellendus velit quibusdam ut quam?
					</p>
				</div>

				<p>4d</p>
			</li>
		</ol>
	);
}
