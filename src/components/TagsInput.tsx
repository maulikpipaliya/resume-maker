import React, { FC, useState, useEffect } from "react";

interface Props {
    tagInputData: {
        id: number;
        text: string;
    }[];
}

const TagsInput: FC<Props> = ({ tagInputData }) => {
    console.log(tagInputData);

    const [tags, setTags] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState<typeof tagInputData>([]);

    const allValues = tagInputData.map(({ text }) => text);

    const handleSuggestion = () => {
        console.log("Input is" + input);
        const suggestions = allValues.filter((item) =>
            item.toLowerCase().includes(input.toLowerCase())
        );
        console.log("suggestions are " + suggestions);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
    };

    const handleKeyDown = (e: any) => {
        if (e.keyCode === 13) {
            e.preventDefault();
        }
        const text = e.currentTarget.value;
        if ([13].includes(e.keyCode) && text) {
            addTag(text);
        }
    };

    const addTag = (text: string) => {
        if (!tags.includes(text)) {
            setTags([...tags, text]);
        }
        setInput("");
    };

    useEffect(() => {
        console.log("Input is" + input);
        const suggestions = tagInputData.filter((item) =>
            item.text.toLowerCase().includes(input.toLowerCase())
        );

        const suggestionExceptTagsTaken = suggestions.filter(
            (item) => !tags.includes(item.text)
        );

        setSuggestions(suggestionExceptTagsTaken);

        return () => {};
    }, [input, tags, tagInputData]);

    return (
        <div>
            <div>
                {tags.map((tag, idx) => (
                    <React.Fragment key={idx}>
                        <span>{tag}</span>
                        <br></br>
                    </React.Fragment>
                ))}
            </div>
            <input
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => handleKeyDown(e)}
                value={input}
            />
            <div>
                {suggestions?.map((suggestion, idx) => (
                    <React.Fragment key={idx}>
                        <div onClick={(e) => addTag(suggestion.text)}>
                            {suggestion.text}{" "}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default TagsInput;
