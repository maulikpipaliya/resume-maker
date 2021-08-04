import React, { useState, useEffect, FC } from "react"
import { Row, Col, Form, Button, Container } from "react-bootstrap"
import { useDispatch } from "react-redux"

import { IEducation } from "../schema"

import AccordionContainer from "./AccordionContainer"
import {
    addEducation,
    deleteEducation,
    updateEducation,
    updateEducationAtIndex,
} from "../actions/educationAction"
import ListContainer from "./ListContainer"
import { RootState } from "../store"
import { useSelector } from "react-redux"

interface IProps {
    formHandler: (e: any, idx: number) => void
    idx: number
}

// const EducationDetailsForm: FC<IProps> = ({ formHandler, idx }) => {
//     return (

//     );
// };

const EducationDetailsComponentCopy: FC = () => {
    const formData: IEducation = {
        degree: "",
        institution: "",
        startYear: null,
        endYear: null,
        gpa: null,
    }

    const [formDataState, setFormDataState] = useState<IEducation>(formData)

    const stateData: RootState = useSelector((state: RootState) => state)
    console.log(stateData)

    const stateCopy = JSON.parse(JSON.stringify(stateData))
    const [formOpen, setFormOpen] = useState(false)
    const [educationDataState, setEducationDataState] = useState(
        stateCopy.education.data
    )

    const {
        education: { data: educationData },
        // skills: { data: skillData },
        // awards: { data: awardData },
        // projects: { data: projectData },
        // interests: { data: interestData },
        // positions: { data: positionData },
        // work: { data: workData },
    } = stateData

    const [idx, setIdx] = useState(educationData.length - 1)
    // const nextIndex = stateC;

    const dispatch = useDispatch()

    const educationDetailsHandlerNew = (e: any) => {
        const { name: keyName, value } = e.currentTarget

        switch (keyName) {
            case "institution":
            case "degree":
            case "startYear":
            case "endYear":
            case "gpa":
                setFormDataState({
                    ...formDataState,
                    [keyName]: value,
                })
                break
            default:
                break
        }
    }
    // console.log(stateObj);

    const saveDataToList = () => {
        setFormOpen(false)
    }

    const resetForm = () => {
        setFormOpen(false)
        dispatch(deleteEducation(educationData.length - 1))
    }

    const deleteEducationField = (index: number) => {
        console.log("Item at index " + index + " to be deleted")
        dispatch(deleteEducation(index))
    }

    // let idx = 0;
    const addEducationFields = () => {
        setFormDataState(formData)
        setFormOpen(true)
        dispatch(addEducation(formData))
        setIdx(idx + 1)
    }

    // var idx = educationData.length - 1;
    const editEducationField = (index: number) => {
        console.log("Edit called" + index)
        setFormOpen(true)
        // idx = index;
        setIdx(index)
        setFormDataState(educationData[index])
    }

    useEffect(() => {
        console.log(idx + " from useEffect")

        dispatch(updateEducationAtIndex(idx, formDataState))
        return () => {}
    }, [dispatch, formDataState, idx])

    return (
        <AccordionContainer title="Education Details Copy">
            <Container>
                <ListContainer
                    addRecordHandler={addEducationFields}
                    editRecordHandler={editEducationField}
                    deleteRecordHandler={deleteEducationField}
                ></ListContainer>
                {formOpen && (
                    <div className="px-2">
                        <Row>
                            <Col xs={10} md={4}>
                                <Form.Group controlId="degree">
                                    <Form.Label>Degree</Form.Label>
                                    <Form.Control
                                        className="rm-textbox"
                                        name="degree"
                                        value={formDataState.degree}
                                        onChange={(e) =>
                                            educationDetailsHandlerNew(e)
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
                                        value={formDataState.institution}
                                        onChange={(e) =>
                                            educationDetailsHandlerNew(e)
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
                                        value={
                                            formDataState.startYear
                                                ? formDataState.startYear
                                                : ""
                                        }
                                        onChange={(e) =>
                                            educationDetailsHandlerNew(e)
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
                                        value={
                                            formDataState.endYear
                                                ? formDataState.endYear
                                                : ""
                                        }
                                        onChange={(e) =>
                                            educationDetailsHandlerNew(e)
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
                                        value={
                                            formDataState.gpa
                                                ? formDataState.gpa
                                                : ""
                                        }
                                        onChange={(e) =>
                                            educationDetailsHandlerNew(e)
                                        }
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6}>
                                <Button
                                    className="w-100 rm-button mx-3"
                                    onClick={saveDataToList}
                                >
                                    Save and close
                                </Button>
                            </Col>
                            <Col xs={6}>
                                <Button
                                    className="w-100 rm-button mx-3"
                                    onClick={addEducationFields}
                                >
                                    Add another
                                </Button>
                            </Col>
                            <Button
                                className="w-100 rm-button my-2 mx-3"
                                onClick={resetForm}
                            >
                                Reset and delete this
                            </Button>
                            <Col xs={10} md={8}></Col>

                            <Col xs={10} md={1}>
                                <Form.Group controlId="removeEducation">
                                    <Button
                                        className="rm-remove-button"
                                        onClick={saveDataToList}
                                    >
                                        -
                                    </Button>
                                </Form.Group>
                            </Col>

                            <Col xs={10} md={1}>
                                <Form.Group controlId="addEducation">
                                    <Button
                                        className="rm-add-button"
                                        onClick={() => {}}
                                    >
                                        +
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                )}
            </Container>
        </AccordionContainer>
    )
}

export default EducationDetailsComponentCopy
