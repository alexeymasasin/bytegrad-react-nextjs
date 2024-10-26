import FeedbackItem from './FeedbackItem';

const feedbackItems = [
	{
		upvoteCount: 593,
		badgeLetter: 'A',
		companyName: 'AlexeyMasaisn',
		text: 'test test test',
		daysAgo: 4,
	},
	{
		upvoteCount: 321,
		badgeLetter: 'N',
		companyName: 'Nike',
		text: 'bla bla bla',
		daysAgo: 4,
	},
	{
		upvoteCount: 1239,
		badgeLetter: 'A',
		companyName: 'Adidas',
		text: 'test test test',
		daysAgo: 3,
	},
];

export default function FeedbackList() {
	return (
		<ol className="feedback-list">
			{feedbackItems.map((feedbackItem) => (
				<FeedbackItem feedbackItem={feedbackItem} />
			))}
		</ol>
	);
}
