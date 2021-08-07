import React, {
    FC,
    JSXElementConstructor,
    ReactElement,
    ReactNode,
} from "react"
import { Form, Button, Badge, Row, Col, Card } from "react-bootstrap"

import { useSelector } from "react-redux"
import { RootState } from "../store"

interface IProps {
    children?: (ReactElement<any, string | JSXElementConstructor<any>> &
        ReactNode) &
        ReactNode
    addRecordHandler: () => void
    editRecordHandler: (index: number) => void
    deleteRecordHandler: (index: number) => void
}

const AwardListContainer: FC<IProps> = ({
    children,
    addRecordHandler,
    editRecordHandler,
    deleteRecordHandler,
}) => {
    const stateData: RootState = useSelector((state: RootState) => state)

    const {
        awards: { data: awardData },
    } = stateData

    return (
        <Form className="px-2 py-1">
            <Card className="bg-grey">
                <Card.Body>
                    {awardData.length > 0 &&
                        awardData.map((item, index) => (
                            <Row key={index}>
                                <Col xs={6} md={6}>
                                    <Badge>{item.title}</Badge>
                                </Col>

                                {item.title.length !== 0 && (
                                    <>
                                        <Col md={{ span: 1, offset: 3 }}>
                                            <i
                                                className="fas fa-edit"
                                                onClick={(e) =>
                                                    editRecordHandler(index)
                                                }
                                            ></i>
                                        </Col>
                                        <Col md={{ span: 1 }}>
                                            <i
                                                className="fas fa-trash text-danger"
                                                onClick={(e) =>
                                                    deleteRecordHandler(index)
                                                }
                                            ></i>
                                        </Col>
                                    </>
                                )}
                            </Row>
                        ))}

                    {awardData.length === 0 && (
                        <span>No awards yet!</span>
                    )}
                </Card.Body>
            </Card>
            <Row>
                <Col md={{ span: 3, offset: 9 }}>
                    <Button
                        className="w-100 my-2 p-2 rm-button"
                        onClick={addRecordHandler}
                    >
                        Add
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default AwardListContainer
