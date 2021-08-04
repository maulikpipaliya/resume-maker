import React, { useState, useEffect, FC } from "react"
import { Row, Col, Form, Button, Container } from "react-bootstrap"
import { useDispatch } from "react-redux"

import { IWork } from "../schema"

import AccordionContainer from "./AccordionContainer"
import { addWork, deleteWork, updateWorkByIndex } from "../actions/workAction"
import WorkListContainer from "./WorkListContainer"
import { RootState } from "../store"
import { useSelector } from "react-redux"

const WorkExperienceComponent: FC = () => {
    const formData: IWork = {
        position: " ",
        company: "",
        summary: "",
        highlights: [],
        startDate: null,
        endDate: null,
        website: "",
    }

    const [formDataState, setFormDataState] = useState<IWork>(formData)

    const stateData: RootState = useSelector((state: RootState) => state)

    const [formOpen, setFormOpen] = useState(false)

    const {
        work: { data: workData },
    } = stateData

    const [idx, setIdx] = useState(workData.length - 1)
    // const nextIndex = stateC;

    const dispatch = useDispatch()

    const workDetailsHandler = (e: any) => {
        const { name: keyName, value } = e.currentTarget
        switch (keyName) {
            case "company":
            case "summary":
            case "position":
                setFormDataState({
                    ...formDataState,
                    [keyName]: value,
                })
                break
            case "startDate":
            case "endDate":
                setFormDataState({
                    ...formDataState,
                    [keyName]: new Date(value),
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
    }

    const deleteWorkField = (index: number) => {
        dispatch(deleteWork(index))
    }

    // let idx = 0;
    const addWorkFields = () => {
        setFormDataState(formData)
        setFormOpen(true)
        dispatch(addWork(formData))
        setIdx(idx + 1)
    }

    const editWorkField = (index: number) => {
        setFormOpen(true)
        setIdx(index)
        setFormDataState(workData[index])
    }

    useEffect(() => {
        dispatch(updateWorkByIndex(idx, formDataState))
        return () => {}
    }, [dispatch, formDataState, idx])

    return (
        <AccordionContainer title="Work Experience">
            <Container>
                <WorkListContainer
                    addRecordHandler={addWorkFields}
                    editRecordHandler={editWorkField}
                    deleteRecordHandler={deleteWorkField}
                ></WorkListContainer>
                {formOpen && (
                    <div className="px-2">
                        <Row>
                            <Col xs={10} md={12}>
                                <Form.Group controlId="company">
                                    <Form.Label>Company</Form.Label>
                                    <Form.Control
                                        className="rm-textbox"
                                        name="company"
                                        value={formDataState.company}
                                        onChange={(e) => workDetailsHandler(e)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={10} md={6}>
                                <Form.Group controlId="position">
                                    <Form.Label>Position</Form.Label>
                                    <Form.Control
                                        className="rm-textbox"
                                        name="position"
                                        value={formDataState.position}
                                        onChange={(e) => workDetailsHandler(e)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={10} md={3}>
                                <Form.Group controlId="startDate">
                                    <Form.Label>From</Form.Label>
                                    <Form.Control
                                        className="rm-textbox"
                                        name="startDate"
                                        type="date"
                                        onBlur={workDetailsHandler}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={10} md={3}>
                                <Form.Group controlId="endDate">
                                    <Form.Label>To</Form.Label>
                                    <Form.Control
                                        className="rm-textbox"
                                        name="endDate"
                                        type="date"
                                        onBlur={workDetailsHandler}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={10} md={12}>
                                <Form.Group controlId="summary">
                                    <Form.Label>Summary</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        className="rm-textbox"
                                        name="summary"
                                        value={
                                            formDataState.summary
                                                ? formDataState.summary
                                                : ""
                                        }
                                        onChange={(e) => workDetailsHandler(e)}
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
                                    onClick={addWorkFields}
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
                                <Form.Group controlId="addWork">
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

export default WorkExperienceComponent
