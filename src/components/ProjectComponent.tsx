import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ProjectComponent = () => {
    const projectDetailHandler = () => {
        console.log("project detail handler");
    };
    return (
        <Container>
            <Form className='p-4'>
                <h5 className='rm-form-heading py-2'>
                    Project Details
                    <hr />
                </h5>
                <Row>
                    <Col xs={10} md={7}>
                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                className='rm-textbox'
                                name='name'
                                onChange={projectDetailHandler}
                            />
                        </Form.Group>
                    </Col>

                    <Col xs={10} md={5}>
                        <Form.Group controlId='dob'>
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control
                                type='date'
                                name='dob'
                                className='rm-textbox'
                                onBlur={projectDetailHandler}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default ProjectComponent;
