import { MAX_CHARACTERS } from "./../../../lib/constants.ts";
import { useState } from "react";

type FeedbackFormProps = {
    onAddToList: (text: string) => void;
};

export default function FeedbackForm({ onAddToList }: FeedbackFormProps) {
    const [text, setText] = useState("");
    const [showValidBorder, setShowValidBorder] = useState(false);
    const [showInvalidBorder, setShowInvalidBorder] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.target.value;
        if (newText.length > MAX_CHARACTERS) {
            return;
        }
        setText(newText);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // basic validation
        if (text.includes("#") && text.length >= 5) {
            setShowValidBorder(true);
            setTimeout(() => setShowValidBorder(false), 2000)
        } else {
            setShowInvalidBorder(true);
            setTimeout(() => setShowInvalidBorder(false), 2000)
            return;
        }

        onAddToList(text);
        setText("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`form ${showValidBorder ? "form--valid" : ""} ${showInvalidBorder ? "form--invalid" : ""}`}
        >
            <textarea
                name=""
                id="feedback-textarea"
                placeholder="*placeholder*"
                spellCheck={false}
                value={text}
                onChange={handleChange}
            ></textarea>
            <label htmlFor="feedback-textarea">
                Enter your feedback here, remember to #hashtag the company
            </label>

            <div>
                <p className="u-italic">{MAX_CHARACTERS - text.length}</p>
                <button>
                    <span>Submit</span>
                </button>
            </div>
        </form>
    );
}
