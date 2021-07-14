import React, { useState, FC } from "react";
import { Button } from "react-bootstrap";

import suggestvalue from "../itdata";

const SkillTagsInput: FC = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleSuggestion = () => {
        //  const { input, tags } = this.state;
        // const suggestFilterInput = suggestvalue.filter((suggest) =>
        //     suggest.text.toLowerCase().includes(input.toLowerCase())
        // );
        const suggestions: string[] = [];
        suggestvalue.forEach((element) => {
            suggestions.push(element.text);
        });

        console.log(suggestions);

        const suggestionExceptTagsTaken = suggestions.filter(
            (element) => !tags.includes(element)
        );

        setSuggestions(suggestionExceptTagsTaken);
    };

    const handleChange = (e: any) => {
        const { value } = e.target;
        setInput(value);
        handleSuggestion();
    };

    const handleDelete = (i: any) => {
        //const { tags } = this.state;
        const newTags = tags.filter((tag, j) => i !== j);
        setTags(newTags);
    };

    const addTag = (text: any) => {
        console.log("onclick called");
        const list: string[] = [...tags];
        setTags([list, text]);
        setInput("");
    };

    const handleKeyDown = (e: any) => {
        if (e.keyCode === 9 || e.keyCode === 13) {
            e.preventDefault();
        }
        //const { tags, input, suggestions } = this.state;
        const text = e.currentTarget.value;
        if ([9, 13].includes(e.keyCode) && text) {
            setTags([...tags, text]);
            // addTag(text);
            setInput("");
        }
    };

    return (
        <>
            <div className='rm-tags-list'>
                {tags.map((tag, i) => (
                    <>
                        <div className='rm-tag'>
                            {tag}

                            <span
                                className='rm-remove-tag-icon'
                                onClick={() => handleDelete(i)}
                            >
                                x
                            </span>
                        </div>
                    </>
                ))}
                {/* <div className='rm-tag'>JavaScript</div> */}
            </div>
            <div className='rm-tags-input'>
                <label htmlFor='expertise'>
                    Choose your tech stack from the list
                </label>

                <input
                    className='rm-tags-textbox'
                    list='expertise-list'
                    name='expertise'
                    id='expertise'
                    value={input}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />

                <div id='rm-tags-suggestions'>
                    {console.log("suggestions" + suggestions)}
                    {suggestions.map((suggestion, idx) => (
                        <div onClick={(e) => addTag(suggestion)}>
                            {suggestion}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <hr />
            </div>
        </>
    );
};
export default SkillTagsInput;
