import React, { useState, useEffect, FC } from "react"
import { Row, Col, Form, Button, Container } from "react-bootstrap"
import { useDispatch } from "react-redux"

import { IEducation } from "../schema"

import AccordionContainer from "./AccordionContainer"
import {
    addEducation,
    deleteEducation,
    updateEducationAtIndex,
} from "../actions/educationAction"
import ListContainer from "./ListContainer"
import { RootState } from "../store"
import { useSelector } from "react-redux"
import { initEducationObj } from "../schema/initResumeData"
import { getDataFromLS } from "../reducers/localStorageReducer"

const EducationDetailsComponentCopy: FC = () => {
    const formData: IEducation = initEducationObj

    // local storage
    const educationDataLS: IEducation[] = getDataFromLS("education")

    //state data
    const educationData: IEducation[] = useSelector(
        (state: RootState) => state.education.data
    )

    // const educationDataMain = educationDataLS

    //state variables
    // const [lsIdx, setLsIdx] = useState(educationDataMain.length)

    console.log("educationDataLS")
    console.log(educationDataLS)
    console.log("educationData")
    console.log(educationData)

    // console.log("lsIdx")
    // console.log(lsIdx)

    console.log("educationDataLS")
    console.log(educationDataLS)

    const [formDataState, setFormDataState] = useState<IEducation>(formData)
    const [formOpen, setFormOpen] = useState(false)
    const [idx, setIdx] = useState(educationData.length - 1)

    console.log("idx")
    console.log(idx)

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

    const saveDataToList = () => {
        setFormOpen(false)
    }

    const resetForm = () => {
        setFormOpen(false)
        setFormDataState(formData)
        // dispatch(deleteEducation(educationData.length - 1))
    }

    const deleteEducationField = (index: number) => {
        dispatch(deleteEducation(index))
    }

    // let idx = 0;
    const addEducationFields = () => {
        setFormDataState(initEducationObj)
        setFormOpen(true)
        dispatch(addEducation(formData))
        setIdx(idx + 1)
    }

    // var idx = educationData.length - 1;
    const editEducationField = (index: number) => {
        setFormOpen(true)
        setIdx(index)
        setFormDataState(educationData[index])
    }

    useEffect(() => {
        dispatch(updateEducationAtIndex(idx, formDataState))
        console.log("educationData")
        console.log(educationData)
        // updateLocalStorageByProperty("education", educationData)

        return () => {}
    }, [dispatch, formDataState, idx])

    return (
    <AccordionContainer title="Education Details">
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
                                    <Form.Label>CPI</Form.Label>
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
                            <Col md={5} className="px-0">
                                <Button
                                    className="w-100 rm-button mx-3"
                                    onClick={saveDataToList}
                                >
                                    Save and close
                                </Button>
                            </Col>
                            <Col md={1}></Col>
                            <Col md={5} className="px-0">
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
                        </Row>
                    </div>
                )}
            </Container>
        </AccordionContainer>
    )
}

export default EducationDetailsComponentCopy
