import React, { useState, FC, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import allValues from "../itdata";
import { IResumeDataState, ISkill } from "../schema";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { updateResumeData } from "../actions/resumeAction";

const SkillTagsInput: FC = () => {
    const initialState: IResumeDataState = useSelector(
        (state: RootState) => state.resumeData
    );

    const dispatch = useDispatch();

    const [stateObj, setStateObj] = useState(initialState.data);

    const [tags, setTags] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState<
        {
            id: number;
            text: string;
        }[]
    >([]);

    const handleSuggestion = () => {
        //  const { input, tags } = this.state;
        const suggestFilterInput = allValues.filter((suggest) =>
            suggest.text.toLowerCase().includes(input.toLowerCase())
        );

        const suggestionExceptTagsTaken = suggestFilterInput.filter(
            (element) => !tags.includes(element.text)
        );

        console.log("hahah");
        console.log(suggestionExceptTagsTaken);

        setSuggestions(suggestionExceptTagsTaken);
    };

    const handleChange = (e: any) => {
        const { value } = e.target;
        setInput(value);
        handleSuggestion();
    };

    const handleDelete = (i: number) => {
        //const { tags } = this.state;
        const newTags = tags.filter((tag, j) => i !== j);
        setTags(newTags);

        const tempSkills: ISkill[] = [...stateObj?.skills];
        const skill: ISkill = { ...tempSkills[0] };

        skill.keywords.splice(i, 1);
        tempSkills[0] = skill;

        setStateObj((prevState: any) => ({
            ...prevState,
            skills: [tempSkills[0]],
        }));
        // setStateObj((prevState: any) => ({
        //     ...prevState,
        //     skills: {
        //         ...prevState.skills,
        //         keywords: newTags,
        //     },
        // }));
    };

    const addTag = (text: any) => {
        console.log("onclick called");
        // const list: string[] = [...tags];
        if (!tags.includes(text)) {
            setTags([...tags, text]);
        }
        setInput("");
        setSuggestions([]);

        const tempSkills: ISkill[] = [...stateObj?.skills];
        const skill: ISkill = { ...tempSkills[0] };

        skill.keywords.push(text);
        tempSkills[0] = skill;

        setStateObj((prevState: any) => ({
            ...prevState,
            skills: [tempSkills[0]],
        }));
    };

    const handleKeyDown = (e: any) => {
        if (e.keyCode === 13) {
            e.preventDefault();
        }
        //const { tags, input, suggestions } = this.state;
        const text = e.currentTarget.value;
        if ([13].includes(e.keyCode) && text) {
            addTag(text);
        }
    };

    useEffect(() => {
        dispatch(updateResumeData(stateObj));
        return () => {};
    }, [stateObj, dispatch]);

    return (
        <>
            <Row>
                <Col md={12}>
                    <div className='rm-tags-list'>
                        {tags.map((tag, i) => (
                            <>
                                <div className='rm-tag'>
                                    {tag}

                                    <span
                                        className='rm-remove-tag-icon'
                                        onClick={() => handleDelete(i)}
                                    >
                                        <i className='fas fa-times-circle'></i>
                                    </span>
                                </div>
                            </>
                        ))}
                        {/* <div className='rm-tag'>JavaScript</div> */}
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <div className='rm-tags-input'>
                        <input
                            className='rm-tags-textbox'
                            list='expertise-list'
                            name='expertise'
                            id='expertise'
                            value={input}
                            placeholder='Press Enter to Select Tag Or Click from below suggestions'
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                </Col>
            </Row>
            {suggestions.length !== 0 && (
                <Row>
                    <Col md={12}>
                        <div className='rm-tags-suggestions'>
                            {console.log("suggestions")}
                            {console.log(suggestions)}
                            {suggestions?.map((suggestion, idx) => (
                                <div
                                    className='rm-tags-suggestion'
                                    onClick={(e) => addTag(suggestion.text)}
                                >
                                    {suggestion.text}
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            )}
        </>
    );
};
export default SkillTagsInput;
