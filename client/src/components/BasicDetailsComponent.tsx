import React, { useState, useEffect, FC } from "react"
import { Row, Col, Form, Button, Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import AccordionContainer from "../components/AccordionContainer"

import { IAuth, IBasic } from "../schema"
import {
    updateBasics,
    resetEmails,
    dbUpdateBasics,
} from "../actions/basicAction"

import { RootState } from "../store"

const BasicDetailsComponent: FC = () => {
    const dispatch = useDispatch()

    // const formData: IBasic = initResumeData.basics // empty data
    const formData: IBasic = useSelector(
        (state: RootState) => state.basics.data
    )

    let authData: IAuth = useSelector((state: RootState) => state.auth.data)

    // let initialBasicData: IBasic = getDataFromLS("basics") // localstorage

    // initialBasicData =
    //     Object.keys(initialBasicData).length === 0 ? formData : initialBasicData

    const [formDataState, setFormDataState] = useState(formData)

    const onSaveHandler = () => {
        dbUpdateBasics(formDataState, authData.authEmail)
    }

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
                            <Col xs={9} md={9}>
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
                            <Col xs={3} md={3} className="">
                                {formDataState.email.length === 1 && (
                                    <Form.Group controlId="addEmail">
                                        <Form.Label>&nbsp;</Form.Label>
                                        <Button
                                            className="rm-button w-100 br-1"
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

                <Row>
                    <Col xs={10} md={12}>
                        <div
                            className="rm-button w-100 p-3 mt-2 text-center hover-bg-grey br-1"
                            onClick={onSaveHandler}
                        >
                            Save
                        </div>
                    </Col>
                </Row>
            </Container>
        </AccordionContainer>
    )
}

export default BasicDetailsComponent
