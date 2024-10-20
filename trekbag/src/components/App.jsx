import { useState } from 'react';
import { initialItems } from '../lib/constants';
import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import Header from './Header';
import ItemList from './ItemList';
import Sidebar from './Sidebar';

function App() {
	const [items, setItems] = useState(initialItems);

	const addItemHandler = (newItemText) => {
		// creating a new item basing on input data
		const newItem = {
			name: newItemText,
			packed: false,
			id: new Date().getTime(),
		};

		// creating a new items array and applying it to state
		const newItems = [...items, newItem];
		setItems(newItems);
	};

	const removeAllItemsHandler = () => {
		setItems([]);
	};

	const resetToInitialHanlder = () => {
		setItems(initialItems);
	};

	const markAllCompletedHandler = () => {
		const newItems = items.map((item) => {
			return { ...item, packed: true };
		});

		setItems(newItems);
	};

	const markAllIncompletedHandler = () => {
		const newItems = items.map((item) => {
			return { ...item, packed: false };
		});

		setItems(newItems);
	};

	return (
		<>
			<BackgroundHeading />
			<main>
				<Header />
				<ItemList items={items} />
				<Sidebar
					addItems={addItemHandler}
					resetAll={resetToInitialHanlder}
					removeAll={removeAllItemsHandler}
					completeAll={markAllCompletedHandler}
					incompleteAll={markAllIncompletedHandler}
				/>
			</main>
			<Footer />
		</>
	);
}

export default App;
