import React, { FC, useEffect, useState } from "react"
import { Row, Col, Form, Button, Container } from "react-bootstrap"
import { IPosition } from "../schema"
import { useDispatch } from "react-redux"
import { RootState } from "../store"
import {
    //updatePositions,
    addPosition,
    deletePosition,
    // updatePositionAtIndex,
} from "../actions/positionAction"
import AccordionContainer from "./AccordionContainer"
import { useSelector } from "react-redux"
import PositionListContainer from "./PositionListContainer"

const PositionComponent: FC = () => {
    const dispatch = useDispatch()

    const formData: IPosition = {
        title: "",
        organization: "",
        summary: "",
    }

    const [formDataState, setFormDataState] = useState(formData)
    const positionData: IPosition[] = useSelector(
        (state: RootState) => state.positions.data
    )

    const [formOpen, setFormOpen] = useState(false)
    const [idx, setIdx] = useState(positionData.length - 1)

    const handleChange = (e: any) => {
        const { name: keyName, value } = e.currentTarget
        switch (keyName) {
            case "title":
            case "organization":
            case "summary":
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

    const addPositionFields = () => {
        setFormDataState(formData)
        setFormOpen(true)
        dispatch(addPosition(formData))
        setIdx(idx + 1)
    }

    const editPositioniField = (index: number) => {
        setFormOpen(true)
        setIdx(index)
        setFormDataState(positionData[index])
    }

    const deletePositionFields = (idx: number) => {
        dispatch(deletePosition(idx))
    }

    const resetForm = () => {
        setFormOpen(false)
        setFormDataState(formData)
    }

    useEffect(() => {
        // dispatch(updatePositionAtIndex(idx, formDataState))
        console.log("helllo maulik")
    }, [formDataState, dispatch, idx])

    return (
        <AccordionContainer title="Positions of Responsibility">
            <Container>
                <PositionListContainer
                    addRecordHandler={addPositionFields}
                    editRecordHandler={editPositioniField}
                    deleteRecordHandler={deletePositionFields}
                />

                {formOpen && (
                    <div className="px-2">
                        <Row>
                            <Col xs={10} md={5}>
                                <Form.Group controlId="title">
                                    <Form.Label>Title</Form.Label>

                                    <Form.Control
                                        type="title"
                                        name="title"
                                        value={formDataState.title}
                                        className="rm-textbox"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={10} md={5}>
                                <Form.Group controlId="organization">
                                    <Form.Label>Organization</Form.Label>
                                    <Form.Control
                                        type="organization"
                                        name="organization"
                                        value={formDataState.organization}
                                        className="rm-textbox"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={10} md={5}>
                                <Form.Group controlId="summary">
                                    <Form.Label>Summary</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={formDataState.summary}
                                        name="summary"
                                        className="rm-textbox"
                                        onChange={(e) => handleChange(e)}
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
                                    onClick={addPositionFields}
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
export default PositionComponent
