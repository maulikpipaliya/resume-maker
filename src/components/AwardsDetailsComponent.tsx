import React, { FC, useEffect, useState } from "react"
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {
    addAward,
    deleteAward,
    updateAwardAtIndex,
    updateAwards,
} from "../actions/awardAction"
import { IAward } from "../schema"
import { RootState } from "../store"
import AccordionContainer from "./AccordionContainer"
import AwardListContainer from "./AwardListContainer"

const AwardsDetails: FC = () => {
    const awardTitle = ""
    const institute = ""
    const summary = ""

    const formData: IAward = {
        title: "",
        awarder: "",
        date: undefined,
        summary: "",
    }

    const dispatch = useDispatch()

    const awardData: IAward[] = useSelector(
        (state: RootState) => state.awards.data
    )

    const [formDataState, setFormDataState] = useState(formData)
    const [formOpen, setFormOpen] = useState(false)

    const [idx, setIdx] = useState(awardData.length - 1)

    const addAwardFields = (item: any) => {
        dispatch(
            addAward({
                title: awardTitle,
                awarder: institute,
                summary: summary,
            })
        )
    }

    const handlerChange = (e: any, idx: number) => {
        const { name, value } = e.currentTarget
        switch (name) {
            case "title":
            case "awarder":
            case "summary":
                setFormDataState({
                    ...formDataState,
                    [name]: value,
                })
                break

            default:
                break
        }
    }

    const addAwardField = () => {
        setFormDataState(formData)
        setFormOpen(true)
        dispatch(addAward(formData))
        setIdx(idx + 1)
    }

    const editAwardField = (idx: number) => {
        setFormOpen(true)
        setIdx(idx)
        setFormDataState(awardData[idx])
    }

    const deleteAwardField = (idx: number) => {
        dispatch(deleteAward(idx))
    }

    const saveDataToList = () => {
        setFormOpen(false)
    }

    const resetForm = () => {
        setFormOpen(false)
        setFormDataState(formData)
    }

    useEffect(() => {
        dispatch(updateAwardAtIndex(idx, formDataState))
    }, [formDataState, dispatch, idx])
    return (
        <AccordionContainer title="Awards Details">
            <Container>
                <AwardListContainer
                    addRecordHandler={addAwardField}
                    deleteRecordHandler={deleteAwardField}
                    editRecordHandler={editAwardField}
                ></AwardListContainer>
                {formOpen && (
                    <div className="px-2">
                        <Row>
                            <Col>
                                <Form.Group controlId="title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        className="rm-textbox"
                                        name="title"
                                        value={formDataState.title}
                                        onChange={(e) => handlerChange(e, idx)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="awarder">
                                    <Form.Label>Organization</Form.Label>
                                    <Form.Control
                                        className="rm-textbox"
                                        name="awarder"
                                        value={formDataState.awarder}
                                        onChange={(e) => handlerChange(e, idx)}
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
                                        onChange={(e) => handlerChange(e, idx)}
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
                                    onClick={addAwardField}
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

export default AwardsDetails
