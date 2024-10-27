import { useEffect, useState } from 'react';
import ErrorMsg from './ErrorMsg';
import FeedbackItem from './FeedbackItem';
import Spinner from './Spinner';

export default function FeedbackList() {
	const [feedbackItems, setFeedbackItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');

	useEffect(() => {
		setIsLoading(true);

		fetch(
			'https://bytegrad.com/course-assets/projects/corpcomment/api/feedback'
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error('');
				}
				return response.json();
			})
			.then((data) => {
				setFeedbackItems(data.feedbacks);
				setIsLoading(false);
			})
			.catch(() => {
				setErrorMsg('Something went wrong');
				setIsLoading(false);
			});
	}, []);

	return (
		<ol className="feedback-list">
			{isLoading && <Spinner />}
			{errorMsg && <ErrorMsg message={errorMsg} />}
			{feedbackItems.map((feedbackItem) => (
				<FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
			))}
		</ol>
	);
}
