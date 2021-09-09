import React, { FC, useState, useEffect } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import {
    addProject,
    deleteProject,
    updateProjectAtIndex,
} from "../actions/projectAction"
import { IProject } from "../schema"
import { RootState } from "../store"
import AccordionContainer from "./AccordionContainer"
import ProjectListContainer from "./ProjectListContainer"
import { useSelector } from "react-redux"
import { initProjectObj } from "../schema/initResumeData"

const ProjectComponent: FC = () => {
    const dispatch = useDispatch()

    const formData: IProject = initProjectObj
    const [formDataState, setFormDataState] = useState<IProject>(formData)
    const projectData: IProject[] = useSelector(
        (state: RootState) => state.projects.data
    )
    const [formOpen, setFormOpen] = useState(false)
    const [idx, setIdx] = useState(projectData.length - 1)

    const projectDetailHandler = (e: any) => {
        const { name: keyName, value } = e.currentTarget
        switch (keyName) {
            case "name":
            case "summary":
            case "guide":
            case "website":
            case "teamSize":
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

    const addProjectField = () => {
        setFormDataState(formData)
        setFormOpen(true)
        dispatch(addProject(formData))
        setIdx(idx + 1)
    }

    const saveDataToList = () => {
        setFormOpen(false)
    }

    const editProjectField = (index: number) => {
        setFormOpen(true)
        setIdx(index)
        setFormDataState(projectData[index])
    }

    const deleteProjectField = (idx: number) => {
        dispatch(deleteProject(idx))
    }

    const resetForm = () => {
        setFormOpen(false)
        setFormDataState(formData)
    }

    useEffect(() => {
        dispatch(updateProjectAtIndex(idx, formDataState))
    }, [formDataState, dispatch, idx])
    return (
        <AccordionContainer title="Project Details">
            <Container>
                <ProjectListContainer
                    addRecordHandler={addProjectField}
                    editRecordHandler={editProjectField}
                    deleteRecordHandler={deleteProjectField}
                ></ProjectListContainer>
                {formOpen && (
                    <div className="px-2">
                        <Row>
                            <Col xs={10} md={5}>
                                <Form.Group controlId="project-name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        className="rm-textbox"
                                        value={formDataState.name}
                                        name="name"
                                        onChange={(e) =>
                                            projectDetailHandler(e)
                                        }
                                    />
                                </Form.Group>
                            </Col>

                            <Col xs={10} md={5}>
                                <Form.Group controlId="teamSize">
                                    <Form.Label>Team-size</Form.Label>
                                    <Form.Control
                                        className="rm-textbox"
                                        name="teamSize"
                                        value={formDataState.teamSize}
                                        onChange={(e) =>
                                            projectDetailHandler(e)
                                        }
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={10} md={5}>
                                <Form.Group controlId="startDate">
                                    <Form.Label>Start Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="startDate"
                                        className="rm-textbox"
                                        // value={formDataState.startDate}
                                        onChange={(e) =>
                                            projectDetailHandler(e)
                                        }
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={10} md={5}>
                                <Form.Group controlId="endDate">
                                    <Form.Label>End Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="endDate"
                                        className="rm-textbox"
                                        // value={formDataState.endDate}
                                        onChange={(e) =>
                                            projectDetailHandler(e)
                                        }
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="summary">
                                    <Form.Label>Summary/Link</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        className="rm-textbox"
                                        name="summary"
                                        value={formDataState.summary}
                                        onChange={(e) =>
                                            projectDetailHandler(e)
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
                                    onClick={addProjectField}
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

export default ProjectComponent
