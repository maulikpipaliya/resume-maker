import React, { FC, useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addAward, deleteAward } from "../actions/awardAction";
import { IAward } from "../schema";
import { RootState } from "../store";
import AccordionContainer from "./AccordionContainer";

const AwardsDetails: FC = () => {
    const [awardTitle, setAwardTitle] = useState("");
    const [institute, setInstitute] = useState("");
    const [summary, setSummary] = useState("");
    const awards = useSelector((state: RootState) => state.awards.data);
    const dispatch = useDispatch();

    const removeAwardFields = (item: IAward) => {
        dispatch(deleteAward(item.title));
    };

    const addAwardFields = (item: any) => {
        dispatch(
            addAward({
                title: awardTitle,
                awarder: institute,
                summary: summary,
            })
        );
    };
    const handlerChange = (e: any, property: string) => {
        switch (property) {
            case "awardTitle":
                setAwardTitle(e.currentTarget.value);
                break;

            case "institute":
                setInstitute(e.currentTarget.value);
                break;
            case "summary":
                setSummary(e.currentTarget.value);
                break;

            default:
                break;
        }
    };
    return (
        <AccordionContainer title='Awards Details'>
            <Container>
                {awards?.map((item, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            <Row>
                                <Col>
                                    <Form.Group controlId='title'>
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            className='rm-textbox'
                                            name='title'
                                            onChange={(e) =>
                                                handlerChange(e, "awardTitle")
                                            }
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId='awarder'>
                                        <Form.Label>Organization</Form.Label>
                                        <Form.Control
                                            className='rm-textbox'
                                            name='awarder'
                                            onChange={(e) =>
                                                handlerChange(e, "institute")
                                            }
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId='summary'>
                                        <Form.Label>Summary/Link</Form.Label>
                                        <Form.Control
                                            as='textarea'
                                            rows={3}
                                            className='rm-textbox'
                                            name='summary'
                                            onChange={(e) =>
                                                handlerChange(e, "summary")
                                            }
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={10} md={10}></Col>
                                {awards?.length !== 1 && (
                                    <Col xs={10} md={1}>
                                        <Form.Group controlId='removeAwards'>
                                            <Button
                                                className='rm-remove-button'
                                                onClick={() =>
                                                    removeAwardFields(item)
                                                }
                                            >
                                                -
                                            </Button>
                                        </Form.Group>
                                    </Col>
                                )}

                                {awards?.length - 1 === idx && (
                                    <Col xs={10} md={1}>
                                        <Form.Group controlId='addAwards'>
                                            <Button
                                                className='rm-add-button'
                                                onClick={(e) =>
                                                    addAwardFields(e)
                                                }
                                            >
                                                +
                                            </Button>
                                        </Form.Group>
                                    </Col>
                                )}
                            </Row>
                        </React.Fragment>
                    );
                })}
            </Container>
        </AccordionContainer>
    );
};

export default AwardsDetails;
