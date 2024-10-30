import { useEffect, useState } from 'react';
import ErrorMsg from './ErrorMsg';
import FeedbackItem from './FeedbackItem';
import Spinner from './Spinner';

export default function FeedbackList() {
	const [feedbackItems, setFeedbackItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');

	useEffect(() => {
		const fetchFeedbackItems = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(
					'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
				);

				if (!response.ok) {
					throw new Error();
				}

				const data = await response.json();
				setFeedbackItems(data.feedbacks);
			} catch (err) {
				setErrorMsg('Something went wrong...');
			}

			setIsLoading(false);
		};
		fetchFeedbackItems();
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
