import React, { useState, useEffect, FC } from "react"
import { Row, Col, Form, Button, Container } from "react-bootstrap"
import { useDispatch } from "react-redux"
import AccordionContainer from "../components/AccordionContainer"

import { IBasic } from "../schema"
import { updateBasics, resetEmails } from "../actions/basicAction"
import { initialLocalResumeData } from "../schema/emptyResumeData"
import { getInitialDataFromLocalStorage } from "../reducers/localStorageReducer"

const BasicDetailsComponent: FC = () => {
    const dispatch = useDispatch()

    const formData: IBasic = initialLocalResumeData.basics // empty data

    let initialBasicData: IBasic = getInitialDataFromLocalStorage("basics") // localstorage

    initialBasicData =
        Object.keys(initialBasicData).length === 0 ? formData : initialBasicData

    const [formDataState, setFormDataState] = useState(initialBasicData)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget
        switch (name) {
            case "name":
                setFormDataState({
                    ...formDataState,
                    name: value,
                })

                break
            case "dob":
                setFormDataState({
                    ...formDataState,
                    dob: new Date(value),
                })
                break
            case "contact":
                setFormDataState({
                    ...formDataState,
                    contact: [value],
                })
                break
            case "city":
            case "region":
                setFormDataState({
                    ...formDataState,
                    location: {
                        ...formDataState.location,
                        [name]: value,
                    },
                })
                break
            default:
                break
        }
    }

    const addEmailField = () => {
        const emails = [...formDataState.email]
        emails.push("")
        setFormDataState({
            ...formDataState,
            email: emails,
        })
    }

    const removeEmailField = (idx: number) => {
        const emails = [...formDataState.email]
        emails.splice(idx, 1)
        setFormDataState({
            ...formDataState,
            email: emails,
        })
    }

    const handleEmail = (e: any, idx: number) => {
        const { value } = e.currentTarget
        const tempEmails = [...formDataState.email]
        tempEmails[idx] = value
        if (value !== "") {
            setFormDataState({
                ...formDataState,
                email: tempEmails,
            })
        }

        if (value === "" && idx === 0) {
            setFormDataState({
                ...formDataState,
                email: [""],
            })
            dispatch(resetEmails())
        }
    }

    useEffect(() => {
        dispatch(updateBasics(formDataState))
    }, [formDataState, dispatch])
    return (
        <AccordionContainer title="Personal Details">
            <Container>
                <Row>
                    <Col xs={10} md={7}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                className="rm-textbox"
                                name="name"
                                value={formDataState.name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col xs={10} md={5}>
                        <Form.Group controlId="dob">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control
                                type="date"
                                name="dob"
                                className="rm-textbox"
                                onBlur={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    {formDataState.email.map((email, idx) => (
                        <React.Fragment key={idx}>
                            <Col xs={10} md={10}>
                                <Form.Group
                                    controlId="email"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Only two emails allowed"
                                >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={email}
                                        className="rm-textbox"
                                        onChange={(e) => handleEmail(e, idx)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={1} md={1} className="px-1">
                                {formDataState.email.length === 1 && (
                                    <Form.Group controlId="addEmail">
                                        <Form.Label>&nbsp;</Form.Label>
                                        <Button
                                            className="rm-form-button"
                                            onClick={addEmailField}
                                        >
                                            Add
                                        </Button>
                                    </Form.Group>
                                )}
                                {formDataState.email.length === 2 && (
                                    <Form.Group controlId="removeEmail">
                                        <Form.Label>&nbsp;</Form.Label>
                                        <Button
                                            className="rm-form-button hover-danger"
                                            onClick={(e) =>
                                                removeEmailField(idx)
                                            }
                                        >
                                            Remove
                                        </Button>
                                    </Form.Group>
                                )}
                            </Col>
                        </React.Fragment>
                    ))}
                </Row>

                <Row>
                    <Col xs={10} md={6}>
                        <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                name="city"
                                value={formDataState.location?.city}
                                className="rm-textbox"
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={10} md={6}>
                        <Form.Group controlId="region">
                            <Form.Label>Region/State</Form.Label>
                            <Form.Control
                                name="region"
                                value={formDataState.location?.region}
                                className="rm-textbox"
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId="contact">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                        name="contact"
                        value={formDataState.contact}
                        className="rm-textbox"
                        onChange={handleChange}
                    />
                </Form.Group>
            </Container>
        </AccordionContainer>
    )
}

export default BasicDetailsComponent
