import { useEffect, useMemo, useState } from "react";
import { TFeedbackItem } from "../../lib/types";
import HashtagList from "./Hashtag/HashtagList";
import Footer from "./Layout/Footer";
import Container from "./Layout/Container";

function App() {
    const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [selectedCompany, setSelectedCompany] = useState("");

    const filteredFeedbackItems = useMemo(() => selectedCompany
        ? feedbackItems.filter(
            (feedbackItem) => feedbackItem.company === selectedCompany,
        )
        : feedbackItems, [feedbackItems, selectedCompany]);

    const companyList = useMemo(() => feedbackItems
        .map((item) => item.company)
        .filter((company, i, arr) => {
            return arr.indexOf(company) === i;
        }), [feedbackItems]);

    const handleSelectCompany = (company: string) => {
        setSelectedCompany(company);
    };

    const handleAddToList = async (text: string) => {
        const companyName = text
            .split(" ")
            .find((word) => word.includes("#"))!
            .substring(1);

        const newItem: TFeedbackItem = {
            id: new Date().getTime(),
            text: text,
            upvoteCount: 0,
            daysAgo: 0,
            company: companyName,
            badgeLetter: companyName.substring(0, 1).toUpperCase(),
        };

        setFeedbackItems([...feedbackItems, newItem]);

        await fetch(
            "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
            {
                method: "POST",
                body: JSON.stringify(newItem),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            },
        );
    };

    useEffect(() => {
        const fetchFeedbackItems = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(
                    "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
                );

                if (!response.ok) {
                    throw new Error();
                }

                const data = await response.json();
                setFeedbackItems(data.feedbacks);
            } catch (err) {
                setErrorMsg("Something went wrong...");
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
                feedbackItems={filteredFeedbackItems}
                handleAddToList={handleAddToList}
            />
            <HashtagList
                handleSelectCompany={handleSelectCompany}
                companyList={companyList}
            />
        </div>
    );
}

export default App;
