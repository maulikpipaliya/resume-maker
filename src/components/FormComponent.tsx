import React, { FC } from "react"
import { Col, Container, Row } from "react-bootstrap"
import EducationDetailsComponentCopy from "./EducationDetailsComponent"
import BasicDetailsComponent from "./BasicDetailsComponent"
import SkillDetailsComponent from "./SkillDetailsComponent"
import ResumeViewComponent from "./ResumeViewComponent"
import AwardsDetailsComponent from "./AwardsDetailsComponent"
import ProjectComponent from "./ProjectComponent"
import PositionComponent from "./PositionComponent"
import WorkExperienceComponent from "./WorkExperienceComponent"
import InterestComponent from "./InterestComponent"

const FormComponent: FC = () => {
    return (
        <div>
            <Container fluid={true} className="p-0">
                <Row>
                    <Col
                        xs={10}
                        md={4}
                        className="rm-ctr-form overflow-auto position-fixed pt-4"
                        id="ctr-form"
                    >
                        <BasicDetailsComponent></BasicDetailsComponent>
                        {/* <EducationDetailsComponent></EducationDetailsComponent> */}
                        <EducationDetailsComponentCopy></EducationDetailsComponentCopy>
                        <SkillDetailsComponent></SkillDetailsComponent>
                        <WorkExperienceComponent></WorkExperienceComponent>
                        <ProjectComponent></ProjectComponent>
                        <PositionComponent></PositionComponent>
                        <AwardsDetailsComponent></AwardsDetailsComponent>
                        <InterestComponent></InterestComponent>
                    </Col>

                    <Col md={{ span: 6, offset: 5 }}>
                        <ResumeViewComponent></ResumeViewComponent>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FormComponent
