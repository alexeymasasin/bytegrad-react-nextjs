import { useEffect, useState } from 'react';
import { TFeedbackItem } from '../../lib/types';
import Container from './Container';
import Footer from './Footer';
import HashtagList from './HashtagList';

function App() {
	const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');

	const handleAddToList = (text: string) => {
		const companyName = text
			.split(' ')
			.find((word) => word.includes('#'))!
			.substring(1);

		const newItem: TFeedbackItem = {
			id: new Date().getTime(),
			text: text,
			upvoteCount: 0,
			daysAgo: 0,
			companyName: companyName,
			badgeLetter: companyName.substring(0, 1).toUpperCase(),
		};

		setFeedbackItems([...feedbackItems, newItem]);
	};

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
		<div className="app">
			<Footer />
			<Container
				isLoading={isLoading}
				errorMsg={errorMsg}
				feedbackItems={feedbackItems}
				handleAddToList={handleAddToList}
			/>
			<HashtagList />
		</div>
	);
}

export default App;
