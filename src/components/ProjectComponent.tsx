import React, { FC, useState, useEffect } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { updateProjects } from "../actions/projectAction"
import { IProject } from "../schema"
import AccordionContainer from "./AccordionContainer"

const ProjectComponent: FC = () => {
    const dispatch = useDispatch()

    const initialData: IProject[] = [{ name: "", summary: "" }]

    const [formDataState, setFormDataState] = useState(initialData)

    const projectDetailHandler = () => {
        console.log("project detail handler")
    }

    const handleChange = (e: any, idx: number) => {
        const { name, value } = e.currentTarget
        switch (name) {
            case "name":
            case "summary":
            case "teamsize":
            case "startdate":
            case "enddate":
                const formDataCopy: IProject[] = [...formDataState]
                const idxPosition: any = { ...formDataCopy[idx] }
                idxPosition[name] = value
                formDataCopy[idx] = idxPosition

                setFormDataState(formDataCopy)
                break
            default:
                break
        }
    }

    const addProjectFields = () => {
        const formDataCopy: IProject[] = [...formDataState]
        formDataCopy.push(initialData[0])
        setFormDataState(formDataCopy)
    }

    const deleteProjectFields = (idx: number) => {
        const formDataCopy: IProject[] = [...formDataState]
        formDataCopy.splice(idx, 1)
        setFormDataState(formDataCopy)
    }

    useEffect(() => {
        dispatch(updateProjects(formDataState))
    }, [formDataState, dispatch])
    return (
        <AccordionContainer title="Project Details">
            <Container>
                <Row>
                    {formDataState.map((item, idx) => {
                        return (
                            <React.Fragment key={idx}>
                                <Row>
                                    <Col xs={10} md={5}>
                                        <Form.Group controlId="name">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                className="rm-textbox"
                                                value={item.name}
                                                name="name"
                                                onChange={(e) =>
                                                    handleChange(e, idx)
                                                }
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col xs={10} md={5}>
                                        <Form.Group controlId="teamsize">
                                            <Form.Label>Team-size</Form.Label>
                                            <Form.Control
                                                className="rm-textbox"
                                                name="teamsize"
                                                value={item.teamSize}
                                                onChange={(e) =>
                                                    handleChange(e, idx)
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={10} md={5}>
                                        <Form.Group controlId="startdate">
                                            <Form.Label>Start Date</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="startdate"
                                                className="rm-textbox"
                                                value={item.startDate}
                                                onChange={(e) =>
                                                    handleChange(e, idx)
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={10} md={5}>
                                        <Form.Group controlId="enddate">
                                            <Form.Label>End Date</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="enddate"
                                                className="rm-textbox"
                                                value={item.endDate}
                                                onChange={(e) =>
                                                    handleChange(e, idx)
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="summary">
                                            <Form.Label>
                                                Summary/Link
                                            </Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                className="rm-textbox"
                                                name="summary"
                                                value={item.summary}
                                                onChange={(e) =>
                                                    handleChange(e, idx)
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                    {formDataState.length !== 1 && (
                                        <Button
                                            className="rm-button"
                                            onClick={(e) =>
                                                deleteProjectFields(idx)
                                            }
                                        >
                                            Remove
                                        </Button>
                                    )}
                                </Row>
                            </React.Fragment>
                        )
                    })}
                </Row>
                <Row>
                    <Col xs={12} md={8}></Col>
                    <Col xs={12} md={4}>
                        <Button
                            className="rm-button"
                            onClick={addProjectFields}
                        >
                            Add
                        </Button>
                    </Col>
                </Row>
            </Container>
        </AccordionContainer>
    )
}

export default ProjectComponent
