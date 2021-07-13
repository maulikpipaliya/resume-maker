import React, { useState, useEffect, FC } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import { IEducation, IResumeData, IResumeDataState } from "../schema";
import { updateResumeData } from "../actions/resumeAction";

const EducationDetailsComponent: FC = () => {
    const initialState: IResumeDataState = useSelector(
        (state: RootState) => state.resumeData
    );

    const dispatch = useDispatch();

    const [stateObj, setStateObj] = useState(initialState.data);

    console.log(stateObj);

    const educationDetailsHandlerOld = (e: any) => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case "institution":
            case "area":
            case "studyType":
            case "startDate":
            case "endDate":
            case "gpa":
                setStateObj((prevState: any) => ({
                    ...prevState,
                    education: [...prevState.education],
                }));
                break;

            default:
                break;
        }
    };

    const educationDetailsHandlerNew = (e: any, idx: number) => {
        const { name: keyName, value } = e.currentTarget;
        const tempEducation: IEducation[] = [...stateObj?.education];

        switch (keyName) {
            case "institution":
            case "area":
            case "studyType":
            case "startDate":
            case "endDate":
            case "gpa":
                const tempEducation: IEducation[] = [...stateObj?.education];
                const ed: any = { ...tempEducation[idx] };

                ed[keyName] = value;
                tempEducation[idx] = ed;
                setStateObj((prevState: any) => ({
                    ...prevState,
                    education: tempEducation,
                }));
                break;
            default:
                break;
        }
    };
    console.log(stateObj);

    const addEducationFields = () => {
        const newEducation = {
            institution: "",
            area: "",
            studyType: "",
            gpa: 0,
            courses: [],
        };
        setStateObj((prevState: any) => ({
            ...prevState,
            education: [...prevState.education, newEducation],
        }));
    };

    const removeEducationFields = (idx: number) => {
        const tempEducation = [...stateObj.education];
        tempEducation.splice(idx, 1);
        setStateObj((prevState: any) => ({
            ...prevState,
            education: tempEducation,
        }));
    };

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
                {stateObj?.education?.map((item, idx) => {
                    return (
                        <>
                            <Row>
                                <Col xs={10} md={4}>
                                    <Form.Group controlId='area'>
                                        <Form.Label>Degree</Form.Label>
                                        <Form.Control
                                            className='rm-textbox'
                                            name='area'
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
                                    <Form.Group controlId='institution'>
                                        <Form.Label>Institution</Form.Label>
                                        <Form.Control
                                            className='rm-textbox'
                                            name='institution'
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
                                    <Form.Group controlId='startDate'>
                                        <Form.Label>From</Form.Label>
                                        <Form.Control
                                            className='rm-textbox'
                                            name='startDate'
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
                                    <Form.Group controlId='endDate'>
                                        <Form.Label>To</Form.Label>
                                        <Form.Control
                                            className='rm-textbox'
                                            name='endDate'
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
                                    <Form.Group controlId='gpa'>
                                        <Form.Label>CPI / Aggregate</Form.Label>
                                        <Form.Control
                                            className='rm-textbox'
                                            name='gpa'
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

                                {stateObj?.education.length !== 1 && (
                                    <Col xs={10} md={4}>
                                        <Form.Group controlId='addEducation'>
                                            <Button
                                                className='rm-remove-button'
                                                onClick={() =>
                                                    removeEducationFields(idx)
                                                }
                                            >
                                                -
                                            </Button>
                                        </Form.Group>
                                    </Col>
                                )}

                                {stateObj?.education.length - 1 === idx && (
                                    <Col xs={10} md={4}>
                                        <Form.Group controlId='addEducation'>
                                            <Button
                                                className='rm-add-button'
                                                onClick={addEducationFields}
                                            >
                                                +
                                            </Button>
                                        </Form.Group>
                                    </Col>
                                )}
                            </Row>
                        </>
                    );
                })}
            </Form>
        </Container>
    );
};

export default EducationDetailsComponent;
