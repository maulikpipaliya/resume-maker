import React, { useState, useEffect, FC } from "react"
import { Row, Col, Form, Button, Container } from "react-bootstrap"
import { useDispatch } from "react-redux"

import { IEducation } from "../schema"

import AccordionContainer from "./AccordionContainer"
import { updateEducation } from "../actions/educationAction"

const EducationDetailsComponent: FC = () => {
    const formData: IEducation[] = [
        {
            degree: "",
            institution: "",
            startYear: null,
            endYear: null,
            gpa: null,
        },
    ]
    const [formDataState, setFormDataState] = useState(formData)

    const dispatch = useDispatch()

    const educationDetailsHandlerNew = (e: any, idx: number) => {
        const { name: keyName, value } = e.currentTarget

        switch (keyName) {
            case "institution":
            case "degree":
            case "startYear":
            case "endYear":
            case "gpa":
                const tempFormData: IEducation[] = [...formDataState]
                //set to any because of errors
                const dataAtIndex: any = { ...tempFormData[idx] }
                dataAtIndex[keyName] = value
                tempFormData[idx] = dataAtIndex
                setFormDataState(tempFormData)
                break
            default:
                break
        }
    }

    const addEducationFields = () => {
        setFormDataState([...formDataState, formData[0]])
    }

    const removeEducationFields = (idx: number) => {
        const tempFormData: IEducation[] = [...formDataState]
        tempFormData.splice(idx, 1)
        setFormDataState(tempFormData)
    }

    useEffect(() => {
        dispatch(updateEducation(formDataState))

        return () => {}
    }, [formDataState, dispatch])

    return (
        <AccordionContainer title="Education Details">
            <Container>
                {formDataState.map((item, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            <Row>
                                <Col xs={10} md={4}>
                                    <Form.Group controlId="degree">
                                        <Form.Label>Degree</Form.Label>
                                        <Form.Control
                                            className="rm-textbox"
                                            name="degree"
                                            onChange={(e) =>
                                                educationDetailsHandlerNew(
                                                    e,
                                                    idx
                                                )
                                            }
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={10} md={8}>
                                    <Form.Group controlId="institution">
                                        <Form.Label>Institution</Form.Label>
                                        <Form.Control
                                            className="rm-textbox"
                                            name="institution"
                                            onChange={(e) =>
                                                educationDetailsHandlerNew(
                                                    e,
                                                    idx
                                                )
                                            }
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={10} md={4}>
                                    <Form.Group controlId="startYear">
                                        <Form.Label>From</Form.Label>
                                        <Form.Control
                                            className="rm-textbox"
                                            name="startYear"
                                            onChange={(e) =>
                                                educationDetailsHandlerNew(
                                                    e,
                                                    idx
                                                )
                                            }
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={10} md={4}>
                                    <Form.Group controlId="endYear">
                                        <Form.Label>To</Form.Label>
                                        <Form.Control
                                            className="rm-textbox"
                                            name="endYear"
                                            onChange={(e) =>
                                                educationDetailsHandlerNew(
                                                    e,
                                                    idx
                                                )
                                            }
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={10} md={4}>
                                    <Form.Group controlId="gpa">
                                        <Form.Label>CPI / Aggregate</Form.Label>
                                        <Form.Control
                                            className="rm-textbox"
                                            name="gpa"
                                            onChange={(e) =>
                                                educationDetailsHandlerNew(
                                                    e,
                                                    idx
                                                )
                                            }
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={10} md={8}></Col>

                                {formDataState.length !== 1 && (
                                    <Col xs={10} md={1}>
                                        <Form.Group controlId="removeEducation">
                                            <Button
                                                className="rm-remove-button"
                                                onClick={() =>
                                                    removeEducationFields(idx)
                                                }
                                            >
                                                -
                                            </Button>
                                        </Form.Group>
                                    </Col>
                                )}

                                {formDataState.length - 1 === idx && (
                                    <Col xs={10} md={1}>
                                        <Form.Group controlId="addEducation">
                                            <Button
                                                className="rm-add-button"
                                                onClick={addEducationFields}
                                            >
                                                +
                                            </Button>
                                        </Form.Group>
                                    </Col>
                                )}
                            </Row>
                        </React.Fragment>
                    )
                })}
            </Container>
        </AccordionContainer>
    )
}

export default EducationDetailsComponent
