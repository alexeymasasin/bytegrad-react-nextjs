import { TFeedbackItem } from '../../lib/types';
import FeedbackList from './FeedbackList';
import Header from './Header';

type ContainerProps = {
	isLoading: boolean;
	feedbackItems: TFeedbackItem[];
	errorMsg: string;
	handleAddToList: (text: string) => void;
};

export default function Container({
	feedbackItems,
	isLoading,
	errorMsg,
	handleAddToList,
}: ContainerProps) {
	return (
		<main className="container">
			<Header handleAddToList={handleAddToList} />
			<FeedbackList
				isLoading={isLoading}
				errorMsg={errorMsg}
				feedbackItems={feedbackItems}
			/>
		</main>
	);
}
