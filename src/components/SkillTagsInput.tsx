import React, { useState, FC } from 'react'
import suggestvalue from '../itdata'

const SkillTagsInput: FC = () => {
    const [tags, setTags] = useState([''])
    const [input, setInput] = useState('')
    const [suggestions, setSuggestions] = useState([''])

    const handleSuggestion = () => {
        //  const { input, tags } = this.state;
        const suggestFilterInput = suggestvalue.filter((suggest) =>
            suggest.text.toLowerCase().includes(input.toLowerCase())
        )
        const suggestions = ['']

        const suggestFilterTags = suggestFilterInput.filter(
            (suggest) => !tags.includes(suggest.text)
        )
        suggestFilterTags.forEach((obj) => {
            suggestions.push(obj.text)
        })

        setSuggestions(suggestions)
    }

    const handleChange = (e: any) => {
        const { value } = e.target
        setInput(value)
        handleSuggestion()
    }

    const handleDelete = (i: any) => {
        //const { tags } = this.state;
        const newTags = tags.filter((tag, j) => i !== j)
        setTags(newTags)
    }

    const AddTags = (text: any) => {
        setTags([...tags, text])
        setInput('')
    }

    const handleKeyDown = (e: any) => {
        if (e.keyCode === 9) {
            e.preventDefault()
        }
        //const { tags, input, suggestions } = this.state;
        const text = suggestions.length ? input : ''
        if ([9, 13].includes(e.keyCode) && text) {
            setTags([...tags, text])
            setInput('')
        }
    }

    return (
        <div className='tags-content'>
            {tags.map((tag, i) => (
                <div key={i} className='tag'>
                    {tag}
                    <div className='remove-tag' onClick={() => handleDelete(i)}>
                        ×
                    </div>
                </div>
            ))}
            <div className='tags-input'>
                <input
                    type='text'
                    value={input}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder='add new tag'
                />
                {input && Boolean(suggestions.length) && (
                    <div className='tags-suggestions'>
                        {suggestions.map((suggest) => (
                            <div
                                className='suggestion-item'
                                onClick={() => AddTags(suggest)}
                            >
                                {suggest}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
export default SkillTagsInput
