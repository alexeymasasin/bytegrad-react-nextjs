import { TFeedbackItem } from '../../lib/types';
import ErrorMsg from './ErrorMsg';
import FeedbackItem from './FeedbackItem';
import Spinner from './Spinner';

type FeedbackListProps = {
	isLoading: boolean;
	errorMsg: string;
	feedbackItems: TFeedbackItem[];
};

export default function FeedbackList({
	feedbackItems,
	isLoading,
	errorMsg,
}: FeedbackListProps) {
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
