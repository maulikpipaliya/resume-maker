import React, { FC } from "react"
import { Col, Container, Row } from "react-bootstrap"
import EducationDetailsComponentCopy from "./EducationDetailsComponent"
import BasicDetailsComponent from "./BasicDetailsComponent"
import SkillDetailsComponent from "./SkillDetailsComponent"
import ResumeComponent from "./ResumeComponent"
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
                        className="rm-ctr-form col-md-4 col-10 overflow-auto position-fixed pt-4"
                        id="ctr-form"
                    >
                        {/* <TagsInput
                            // tagInputData={tagInputPropDataX}
                        // ></TagsInput> */}
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
                    <Col
                        md={{ span: 8, offset: 4 }}
                        className="ctr-view"
                        id="ctr-view"
                    >
                        <ResumeComponent></ResumeComponent>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FormComponent
