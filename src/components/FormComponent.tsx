import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import EducationDetailsComponent from "./EducationDetailsComponent";
import BasicDetailsComponent from "./BasicDetailsComponent";
import SkillDetailsComponent from "./SkillDetailsComponent";
import ResumeComponent from "./ResumeComponent";


const FormComponent: FC = () => {
    return (
        <div>
            <Container fluid={true} className='p-0'>
                <Row>
                    <Col xs={10} md={4} className='ctr-form' id='ctr-form'>
                        <BasicDetailsComponent></BasicDetailsComponent>
                        <EducationDetailsComponent></EducationDetailsComponent>
                        <SkillDetailsComponent></SkillDetailsComponent>
                    </Col>
                    <Col md={8} className='ctr-view' id='ctr-view'>
                        <ResumeComponent></ResumeComponent>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FormComponent;
