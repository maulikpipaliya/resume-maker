import React, { useState, useEffect, FormEvent, FC } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import ResumeComponent from "./ResumeComponent";
import { RootState } from "../store";
import { IResumeData, IResumeDataState } from "../schema";
import { updateResumeData } from "../actions/resumeAction";

const BasicDetailsComponent: FC = () => {
    const initialState: IResumeDataState = useSelector(
        (state: RootState) => state.resumeData
    );

    const dispatch = useDispatch();
    console.log(initialState);
    const [stateObj, setStateObj] = useState(initialState.data);

    console.log(stateObj);

    const educationDetailsHandler = (e: any) => {
        const { name, value } = e.currentTarget;
        console.log(e.currentTarget.name + " : ");
        console.log(e.currentTarget.value);

        switch (name) {
            case "name":
            case "email":
            case "contact":
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

    console.log(stateObj);

    useEffect(() => {
        console.log("State updating");
        dispatch(updateResumeData(stateObj));
        console.log(stateObj);
        console.log("State updated");

        return () => {};
    }, [stateObj]);

    return (
        <Row>
            <Col xs={10} md={4} className='ctr-form' id='ctr-form'>
                <Container>
                    <Form className='p-4'>
                        <Form.Group controlId='name'>
                            <Form.Label>CLG NAME</Form.Label>
                            <Form.Control
                                className='rm-textbox'
                                name='name'
                                onChange={educationDetailsHandler}
                            />
                        </Form.Group>

                        <Form.Group controlId='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                name='email'
                                className='rm-textbox'
                                onChange={educationDetailsHandler}
                            />
                        </Form.Group>
      
                        <Form.Group controlId='contact'>
                            <Form.Label>Contact</Form.Label>
                            <Form.Control
                                name='contact'
                                className='rm-textbox'
                                onChange={educationDetailsHandler}
                            />
                        </Form.Group>
                        <Form.Group controlId='city'>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                name='city'
                                className='rm-textbox'
                                onChange={educationDetailsHandler}
                            />
                        </Form.Group>
                        <Form.Group controlId='address'>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                name='address'
                                className='rm-textbox'
                                onChange={educationDetailsHandler}
                            />
                        </Form.Group>

                        <Form.Group controlId='igusername'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                name='username'
                                className='rm-textbox'
                                onChange={educationDetailsHandler}
                            />
                        </Form.Group>
                    </Form>
                </Container>
            </Col>
            <Col md={8} className='ctr-view' id='ctr-view'>
                <ResumeComponent></ResumeComponent>
            </Col>
        </Row>
    );
};

export default BasicDetailsComponent;
