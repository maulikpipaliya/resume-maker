import React, { FC } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SkillTagsInput from "./SkillTagsInput";

const SkillDetailsComponent: FC = () => {
    return (
        <Container>
            <Form className='p-4'>
                <h5 className='rm-form-heading py-2'>
                    Skills Details
                    <hr />
                </h5>
                <Row>
                    <Col xs={10} md={10}>
                        <SkillTagsInput></SkillTagsInput>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default SkillDetailsComponent;
