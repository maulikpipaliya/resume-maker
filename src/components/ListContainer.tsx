import React, {
    FC,
    JSXElementConstructor,
    ReactElement,
    ReactNode,
    useState,
} from "react";
import {
    Container,
    Form,
    Button,
    Badge,
    Row,
    Col,
    Card,
} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface IProps {
    children?: (ReactElement<any, string | JSXElementConstructor<any>> &
        ReactNode) &
        ReactNode;
    addRecordHandler?: () => void;
    oldRecords?: any;
}

const ListContainer: FC<IProps> = ({
    children,
    addRecordHandler,
    oldRecords,
}) => {
    const stateData: RootState = useSelector((state: RootState) => state);
    console.log(stateData);

    const {
        education: { data: educationData },
        // skills: { data: skillData },
        // awards: { data: awardData },
        // projects: { data: projectData },
        // interests: { data: interestData },
        // positions: { data: positionData },
        // work: { data: workData },
    } = stateData;

    return (
        // <Container>
        <Form className='px-2 py-1'>
            <Card className='bg-grey'>
                <Card.Body>
                    {educationData.length > 0 &&
                        educationData.map((item, index) => (
                            <Row key={index}>
                                <Col xs={12} sm={6} md={6}>
                                    <Badge>{item.degree}</Badge>
                                </Col>
                                <Col xs={12} sm={6} md={6}>
                                    <Badge>{item.institution}</Badge>
                                </Col>
                            </Row>
                        ))}

                    {educationData.length === 0 && (
                        <span>There are no educational details yet!</span>
                    )}
                </Card.Body>
            </Card>
            <Row>
                <Col md={{ span: 3, offset: 9 }}>
                    <Button
                        className='w-100 my-2 p-2 rm-button'
                        onClick={addRecordHandler}
                    >
                        Add
                    </Button>
                </Col>
            </Row>
        </Form>
        // </Container>
    );
};

export default ListContainer;
