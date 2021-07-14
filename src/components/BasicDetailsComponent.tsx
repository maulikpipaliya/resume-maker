import React, { useState, useEffect, FC } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import { IResumeDataState } from "../schema";
import { updateResumeData } from "../actions/resumeAction";

const BasicDetailsComponent: FC = () => {
    const initialState: IResumeDataState = useSelector(
        (state: RootState) => state.resumeData
    );

    const dispatch = useDispatch();
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
            case "dob":
            case "summary":
                setStateObj((prevState: any) => ({
                    ...prevState,
                    basics: {
                        ...prevState.basics,
                        [name]: value,
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

    const emailHandler = (e: any, idx: number) => {
        const { name, value } = e.currentTarget;
        const tempEmails = [...stateObj.basics.email];
        tempEmails[idx] = value;

        setStateObj((prevState: any) => ({
            ...prevState,
            basics: {
                ...prevState.basics,
                [name]: tempEmails,
            },
        }));
    };

    const addEmailBox = () => {
        setStateObj((prevState: any) => ({
            ...prevState,
            basics: {
                ...prevState.basics,
                email: [...prevState.basics.email, ""],
            },
        }));
    };

    const removeEmailHandler = (idx: number) => {
        const tempEmails = [...stateObj.basics.email];
        tempEmails.splice(idx, 1);
        setStateObj((prevState: any) => ({
            ...prevState,
            basics: {
                ...prevState.basics,
                email: tempEmails,
            },
        }));
    };
    // console.log(stateObj);

    useEffect(() => {
        // console.log("State updating");
        dispatch(updateResumeData(stateObj));
        // console.log(stateObj);
        // console.log("State updated");

        return () => {};
    }, [stateObj, dispatch]);

    return (
        <Container>
            <Form className='p-4'>
                <h5 className='rm-form-heading py-2'>
                    Personal Details
                    <hr />
                </h5>
                <Row>
                    <Col xs={10} md={7}>
                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                className='rm-textbox'
                                name='name'
                                onChange={basicDetailHandler}
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
                                placeholder='dd-mm-yyyy'
                                onChange={basicDetailHandler}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    {stateObj?.basics?.email.map((emailItem, idx) => (
                        <React.Fragment key={idx}>
                            <Col xs={10} md={10} key={idx}>
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
                                <Col xs={1} md={1} className='px-1' key={idx}>
                                    <Form.Group controlId='removeEmail'>
                                        <Button
                                            className='rm-remove-button'
                                            onClick={() =>
                                                removeEmailHandler(idx)
                                            }
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
                    ))}
                </Row>

                <Row>
                    <Col xs={10} md={6}>
                        <Form.Group controlId='city'>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                name='city'
                                className='rm-textbox'
                                onChange={basicDetailHandler}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={10} md={6}>
                        <Form.Group controlId='region'>
                            <Form.Label>Region/State</Form.Label>
                            <Form.Control
                                name='region'
                                className='rm-textbox'
                                onChange={basicDetailHandler}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId='contact'>
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                        name='contact'
                        className='rm-textbox'
                        onChange={basicDetailHandler}
                    />
                </Form.Group>
            </Form>
        </Container>
    );
};

export default BasicDetailsComponent;
