import React, { useState, useEffect, FormEvent, FC } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import ResumeComponent from "./ResumeComponent";
import { RootState } from "../store";
import { IResumeData, IResumeDataState } from "../schema";
import { updateResumeData } from "../actions/resumeAction";

const FormComponent: FC = () => {
    const initialState: IResumeDataState = useSelector(
        (state: RootState) => state.resumeData
    );

    const dispatch = useDispatch();
    console.log(initialState);
    const [stateObj, setStateObj] = useState(initialState.data);

    console.log(stateObj);

    console.log("oldStateLevel");
    // console.log(oldStateLevel)

    const masterHandler = (e: any) => {
        const { name, value } = e.currentTarget;
        const propName = name.split(".");
        const depth = name.split(".").length;

        const oldstate = stateObj;
        const newstate = { ...stateObj };
        let newStateLevel: any = newstate;
        let oldStateLevel: any = oldstate;

        console.log(depth);

        for (let i = 0; i < depth; i += 1) {
            if (i === depth - 1) {
                if (Array.isArray(propName[i - 1])) {
                    newStateLevel[propName[i]][propName[i - 1].length - 1] =
                        value;
                } else {
                    newStateLevel[propName[i]] = value;
                }
            } else {
                if (Array.isArray(propName[i])) {
                    newStateLevel[propName[i]][propName[i].length - 1] = {
                        ...oldStateLevel[propName[i]][propName[i].length - 1],
                    };
                    oldStateLevel =
                        oldStateLevel[propName[i]][propName[i].length - 1];
                    newStateLevel =
                        newStateLevel[propName[i]][propName[i].length - 1];
                } else {
                    newStateLevel[propName[i]] = {
                        ...oldStateLevel[propName[i]],
                    };
                    oldStateLevel = oldStateLevel[propName[i]];
                    newStateLevel = newStateLevel[propName[i]];
                }
            }
        }
        setStateObj(newstate);
    };

    const basicDetailHandler = (e: any) => {
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
            case 'username':
                setStateObj((prevState: any) => ({
                    ...prevState,
                    basics: {
                        ...prevState.basics,
                        profile: [{
                            [name] : value
                        }]
                    }
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
        <div>
            <Container fluid={true} className='p-0'>
                <Row>
                    <Col xs={10} md={4} className='ctr-form' id='ctr-form'>
                        <Container>
                            <Form className='p-4'>
                                <Form.Group controlId='name'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        className='rm-textbox'
                                        name='name'
                                        onChange={basicDetailHandler}
                                    />
                                </Form.Group>

                                <Form.Group controlId='email'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type='email'
                                        name='email'
                                        className='rm-textbox'
                                        onChange={basicDetailHandler}
                                    />
                                </Form.Group>
                                {/* <Form.Group controlId='dob'>
                                    <Form.Label>DOB</Form.Label>
                                    <Form.Control
                                        type='date'
                                        name='dob'
                                        className='rm-textbox'
                                        onChange={basicDetailHandler}
                                    />
                                </Form.Group> */}
                                <Form.Group controlId='contact'>
                                    <Form.Label>Contact</Form.Label>
                                    <Form.Control
                                        name='contact'
                                        className='rm-textbox'
                                        onChange={basicDetailHandler}
                                    />
                                </Form.Group>
                                <Form.Group controlId='city'>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        name='city'
                                        className='rm-textbox'
                                        onChange={basicDetailHandler}
                                    />
                                </Form.Group>
                                <Form.Group controlId='address'>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        name='address'
                                        className='rm-textbox'
                                        onChange={basicDetailHandler}
                                    />
                                </Form.Group>

                                <Form.Group controlId='igusername'>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        name='username'
                                        className='rm-textbox'
                                        onChange={basicDetailHandler}
                                    />
                                </Form.Group>
                            </Form>
                        </Container>
                    </Col>
                    <Col md={8} className='ctr-view' id='ctr-view'>
                        <ResumeComponent></ResumeComponent>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FormComponent;
