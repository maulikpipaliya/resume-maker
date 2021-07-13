import React, { useState, useEffect, FormEvent, FC } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import ResumeComponent from "./ResumeComponent";
import { RootState } from "../store";
import { IResumeData, IResumeDataState } from "../schema";
import { updateResumeData } from "../actions/resumeAction";

const EducationDetailsComponent: FC = () => {
    const initialState: IResumeDataState = useSelector(
        (state: RootState) => state.resumeData
    );

    const dispatch = useDispatch();
    console.log(initialState);
    const [stateObj, setStateObj] = useState(initialState.data);

    console.log(stateObj);

    const educationDetailsHandler = (e: any) => {
        const { name, value } = e.currentTarget;

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
    }, [stateObj, dispatch]);

    return (
        <Container>
            <Form className='p-4'>
                <h5 className='rm-form-heading py-2'>
                    Educational Details
                    <hr />
                </h5>
                <Form.Group controlId='institution'>
                    <Form.Label>University</Form.Label>
                    <Form.Control
                        className='rm-textbox'
                        name='institution'
                        onChange={educationDetailsHandler}
                    />
                </Form.Group>

                <Form.Group controlId='intermediate'>
                    <Form.Label>Intermediate (Higher Secondary)</Form.Label>
                    <Form.Control
                        name='intermediate'
                        className='rm-textbox'
                        onChange={educationDetailsHandler}
                    />
                </Form.Group>

                <Form.Group controlId='highschool'>
                    <Form.Label>High School (Secondary) </Form.Label>
                    <Form.Control
                        name='highschool'
                        className='rm-textbox'
                        onChange={educationDetailsHandler}
                    />
                </Form.Group>
            </Form>
        </Container>
    );
};

export default EducationDetailsComponent;
