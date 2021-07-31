import React, { FC, useEffect, useState } from 'react'
import FormPanelContainer from './FormPanelContainer'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'
import { IPosition } from '../schema'
import { useDispatch } from 'react-redux'
import { updatePositions } from '../actions/positionAction'
import AccordionContainer from './AccordionContainer'

const PositionComponent: FC = () => {
    const dispatch = useDispatch()
    const formData: IPosition[] = [
        {
            title: '',
            organization: '',
            summary: '',
        },
    ]

    const [formDataState, setFormDataState] = useState(formData)

    const handleChange = (e: any, idx: number) => {
        const { name, value } = e.currentTarget
        switch (name) {
            case 'title':
            case 'organization':
            case 'summary':
                const formDataCopy: IPosition[] = [...formDataState]
                const idxPosition: any = { ...formDataCopy[idx] }
                idxPosition[name] = value
                formDataCopy[idx] = idxPosition

                setFormDataState(formDataCopy)
                break
            default:
                break
        }
    }

    const addPositionFields = () => {
        const formDataCopy: IPosition[] = [...formDataState]
        formDataCopy.push(formData[0])
        setFormDataState(formDataCopy)
    }

    const deletePositionFields = (idx: number) => {
        const formDataCopy: IPosition[] = [...formDataState]
        formDataCopy.splice(idx, 1)
        setFormDataState(formDataCopy)
    }

    useEffect(() => {
        console.log('formDataState', formDataState)
        console.log('effect')
        dispatch(updatePositions(formDataState))
    }, [formDataState, dispatch])

    return (
        <AccordionContainer title='Positions of Responsibility'>
            <Container>
                <Row>
                    {formDataState.map((item, idx) => {
                        return (
                            <React.Fragment key={idx}>
                                <Col xs={4} md={4}>
                                    <Form.Group controlId='title'>
                                        <Form.Label>Title</Form.Label>

                                        <Form.Control
                                            type='title'
                                            name='title'
                                            value={item.title}
                                            className='rm-textbox'
                                            onChange={(e) =>
                                                handleChange(e, idx)
                                            }
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={4} md={8}>
                                    <Form.Group controlId='organization'>
                                        <Form.Label>Organization</Form.Label>
                                        <Form.Control
                                            type='organization'
                                            name='organization'
                                            value={item.organization}
                                            className='rm-textbox'
                                            onChange={(e) =>
                                                handleChange(e, idx)
                                            }
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={4} md={12}>
                                    <Form.Group controlId='summary'>
                                        <Form.Label>Summary</Form.Label>
                                        <Form.Control
                                            as='textarea'
                                            rows={3}
                                            value={item.summary}
                                            name='summary'
                                            className='rm-textbox'
                                            onChange={(e) =>
                                                handleChange(e, idx)
                                            }
                                        />
                                    </Form.Group>
                                </Col>
                                {formDataState.length !== 1 && (
                                    <Button
                                        className='rm-button'
                                        onClick={(e) =>
                                            deletePositionFields(idx)
                                        }
                                    >
                                        Remove
                                    </Button>
                                )}
                            </React.Fragment>
                        )
                    })}
                </Row>
                <Row>
                    <Col xs={12} md={8}></Col>
                    <Col xs={12} md={4}>
                        <Button
                            className='rm-button'
                            onClick={addPositionFields}
                        >
                            Add
                        </Button>
                    </Col>
                </Row>
            </Container>
        </AccordionContainer>
    )
}

export default PositionComponent
