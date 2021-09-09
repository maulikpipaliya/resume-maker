import React, { useState, FC, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { ISkill } from "../schema"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"

import { addInterest, deleteInterest } from "../actions/interestAction"

interface Props {
    tagInputData: {
        id: number
        text: string
    }[]
    placeholder: string
}

const InterestTagsInput: FC<Props> = ({ tagInputData, placeholder }) => {
    const initialState: RootState = useSelector((state: RootState) => state)

    const initialInterestData: string[] = useSelector(
        (state: RootState) => state.interests.data
    )

    const dispatch = useDispatch()

    const [stateObj, setStateObj] = useState(initialState)

    const [tags, setTags] = useState<string[]>([])
    const [input, setInput] = useState("")
    const [suggestions, setSuggestions] = useState<
        {
            id: number
            text: string
        }[]
    >([])

    const handleSuggestion = () => {
        //  const { input, tags } = this.state;
        const suggestFilterInput = tagInputData.filter((suggest) =>
            suggest.text.toLowerCase().includes(input.toLowerCase())
        )

        const suggestionExceptTagsTaken = suggestFilterInput.filter(
            (element) => !tags.includes(element.text)
        )

        setSuggestions(suggestionExceptTagsTaken)
    }

    const handleChange = (e: any) => {
        const { value } = e.target
        setInput(value)
        handleSuggestion()
    }

    const handleDelete = (i: number) => {
        const newTags = tags.filter((tag, j) => i !== j)
        setTags(newTags)

        dispatch(deleteInterest(tags[i]))
    }

    const addTag = (text: any) => {
        // const list: string[] = [...tags];
        if (!tags.includes(text)) {
            setTags([...tags, text])
        }
        setInput("")
        setSuggestions([])

        dispatch(addInterest(text))
    }

    const handleKeyDown = (e: any) => {
        if (e.keyCode === 13) {
            e.preventDefault()
        }
        //const { tags, input, suggestions } = this.state;
        const text = e.currentTarget.value
        if ([13].includes(e.keyCode) && text) {
            const similarTags = tags.filter(
                (tag) => tag.toLowerCase() === text.toLowerCase()
            )

            if (similarTags.length === 0) addTag(text)
        }
    }

    useEffect(() => {
        // dispatch(updateResumeData(stateObj))

        return () => {}
    }, [stateObj, dispatch])

    return (
        <>
            <Row>
                <Col md={12}>
                    <div className="rm-tags-list">
                        {tags.map((tag, idx) => (
                            <React.Fragment key={idx}>
                                <div className="rm-tag">
                                    {tag}

                                    <span
                                        className="rm-remove-tag-icon"
                                        onClick={() => handleDelete(idx)}
                                    >
                                        <i className="fas fa-times-circle"></i>
                                    </span>
                                </div>
                            </React.Fragment>
                        ))}
                        {/* <div className='rm-tag'>JavaScript</div> */}
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <div className="rm-tags-input">
                        <input
                            className="rm-tags-textbox"
                            list="expertise-list"
                            name="expertise"
                            // id="expertise"
                            value={input}
                            placeholder={placeholder}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                </Col>
            </Row>
            {suggestions.length !== 0 && (
                <Row>
                    <Col md={12}>
                        <div className="rm-tags-suggestions">
                            {suggestions?.map((suggestion, idx) => (
                                <div
                                    className="rm-tags-suggestion"
                                    onClick={(e) => addTag(suggestion.text)}
                                    key={idx}
                                >
                                    {suggestion.text}
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            )}
            {suggestions.length === 0 && <div className="mb-5"></div>}
        </>
    )
}
export default InterestTagsInput
