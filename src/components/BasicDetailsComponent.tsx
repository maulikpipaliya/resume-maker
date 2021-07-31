import React, { useState, useEffect, FC } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AccordionContainer from "../components/AccordionContainer";
import { convertDate } from "../utils";
import { RootState } from "../store";

import { IResumeDataState } from "../schema/state/IResumeDataState";
import { IBasic, ILocation } from "../schema";
import { updateBasics, resetEmails } from "../actions/basicAction";

const BasicDetailsComponent: FC = () => {
    const dispatch = useDispatch();
    const initialState: IResumeDataState = useSelector(
        (state: RootState) => state.resumeData
    );
    const locationData: ILocation = {
        city: "",
        region: "",
    };
    const formData: IBasic = {
        name: "",
        email: [""],
        dob: null,
        contact: [""],
        location: locationData,
    };

    const [formDataState, setFormDataState] = useState(formData);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case "name":
                setFormDataState({
                    ...formDataState,
                    name: value,
                });

                break;
            case "dob":
                setFormDataState({
                    ...formDataState,
                    dob: new Date(value),
                });
                break;
            case "contact":
                setFormDataState({
                    ...formDataState,
                    contact: [value],
                });
                break;
            case "city":
            case "region":
                setFormDataState({
                    ...formDataState,
                    location: {
                        ...formDataState.location,
                        [name]: value,
                    },
                });
                break;
            default:
                break;
        }
    };

    // console.log(initialState);
    const [stateObj, setStateObj] = useState(initialState.data);

    // console.log(stateObj);

    const basicDetailHandler = (e: any) => {
        const { name, value } = e.currentTarget;
        // console.log(e.currentTarget.name + " : ");
        // console.log(e.currentTarget.value);

        switch (name) {
            case "name":
            case "phone":
            case "contact":
            case "summary":
                setStateObj((prevState: any) => ({
                    ...prevState,
                    basics: {
                        ...prevState.basics,
                        [name]: value,
                    },
                }));
                break;
            case "dob":
                setStateObj((prevState: any) => ({
                    ...prevState,
                    basics: {
                        ...prevState.basics,
                        [name]: convertDate(e.target.valueAsNumber),
                    },
                }));
                break;
            case "city":
            case "address":
            case "postalCode":
            case "countryCode":
            case "region":
                setStateObj((prevState: any) => ({
                    ...prevState,
                    basics: {
                        ...prevState.basics,
                        location: {
                            ...prevState.basics.location,
                            [name]: value,
                        },
                    },
                }));
                break;

            case "username":
                setStateObj((prevState: any) => ({
                    ...prevState,
                    basics: {
                        ...prevState.basics,
                        profile: [
                            {
                                [name]: value,
                            },
                        ],
                    },
                }));
                break;
            default:
            // code block
        }
    };

    const addEmailField = () => {
        const emails = [...formDataState.email];
        emails.push("");
        setFormDataState({
            ...formDataState,
            email: emails,
        });
    };

    const removeEmailField = (idx: number) => {
        const emails = [...formDataState.email];
        console.log(emails);
        emails.splice(idx, 1);
        setFormDataState({
            ...formDataState,
            email: emails,
        });
    };

    const handleEmail = (e: any, idx: number) => {
        const { value } = e.currentTarget;
        const tempEmails = [...formDataState.email];
        tempEmails[idx] = value;
        if (value !== "") {
            setFormDataState({
                ...formDataState,
                email: tempEmails,
            });
        }

        if (value === "" && idx === 0) {
            setFormDataState({
                ...formDataState,
                email: [""],
            });
            dispatch(resetEmails());
        }
    };

    // console.log(stateObj);

    // useEffect(() => {
    //     // console.log("State updating");
    //     dispatch(updateResumeData(stateObj));
    //     // console.log(stateObj);
    //     // console.log("State updated");

    //     return () => {};
    // }, [stateObj, dispatch]);

    useEffect(() => {
        dispatch(updateBasics(formDataState));
    }, [formDataState, dispatch]);
    return (
        <AccordionContainer title='Personal Details'>
            <Container>
                <Row>
                    <Col xs={10} md={7}>
                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                className='rm-textbox'
                                name='name'
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col xs={10} md={5}>
                        <Form.Group controlId='dob'>
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control
                                type='date'
                                name='dob'
                                className='rm-textbox'
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
                                    controlId='email'
                                    data-toggle='tooltip'
                                    data-placement='top'
                                    title='Only two emails allowed'
                                >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type='email'
                                        name='email'
                                        value={email}
                                        className='rm-textbox'
                                        onChange={(e) => handleEmail(e, idx)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={1} md={1} className='px-1'>
                                {formDataState.email.length === 1 && (
                                    <Form.Group controlId='addEmail'>
                                        <Button
                                            className='rm-add-button'
                                            onClick={addEmailField}
                                        >
                                            +
                                        </Button>
                                    </Form.Group>
                                )}
                                {formDataState.email.length === 2 && (
                                    <Form.Group controlId='removeEmail'>
                                        <Button
                                            className='rm-remove-button'
                                            onClick={(e) =>
                                                removeEmailField(idx)
                                            }
                                        >
                                            -
                                        </Button>
                                    </Form.Group>
                                )}
                            </Col>
                        </React.Fragment>
                    ))}
                    {/* 
                {stateObj?.basics?.email.map((emailItem, idx) => (
                    <React.Fragment key={idx}>
                        <Col xs={10} md={10}>
                            <Form.Group controlId='email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type='email'
                                    name='email'
                                    className='rm-textbox'
                                    onChange={(e) => emailHandler(e, idx)}
                                />
                            </Form.Group>
                        </Col>

                        {stateObj?.basics.email.length !== 1 && (
                            <Col xs={1} md={1} className='px-1'>
                                <Form.Group controlId='removeEmail'>
                                    <Button
                                        className='rm-remove-button'
                                        onClick={() => removeEmailHandler(idx)}
                                    >
                                        -
                                    </Button>
                                </Form.Group>
                            </Col>
                        )}
                        {stateObj?.basics.email.length - 1 === idx && (
                            <Col xs={1} md={1} className='px-1'>
                                <Form.Group controlId='addEmail'>
                                    <Button
                                        className='rm-add-button'
                                        onClick={addEmailBox}
                                    >
                                        +
                                    </Button>
                                </Form.Group>
                            </Col>
                        )}
                    </React.Fragment>
                ))} */}
                </Row>

                <Row>
                    <Col xs={10} md={6}>
                        <Form.Group controlId='city'>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                name='city'
                                className='rm-textbox'
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={10} md={6}>
                        <Form.Group controlId='region'>
                            <Form.Label>Region/State</Form.Label>
                            <Form.Control
                                name='region'
                                className='rm-textbox'
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId='contact'>
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                        name='contact'
                        className='rm-textbox'
                        onChange={handleChange}
                    />
                </Form.Group>
            </Container>
        </AccordionContainer>
    );
};

export default BasicDetailsComponent;
