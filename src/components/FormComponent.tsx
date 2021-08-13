import React, { FC } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import EducationDetailsComponentCopy from "./EducationDetailsComponent"
import BasicDetailsComponent from "./BasicDetailsComponent"
import SkillDetailsComponent from "./SkillDetailsComponent"
import ResumeViewComponent from "./ResumeViewComponent"
import AwardsDetailsComponent from "./AwardsDetailsComponent"
import ProjectComponent from "./ProjectComponent"
import PositionComponent from "./PositionComponent"
import WorkExperienceComponent from "./WorkExperienceComponent"
import InterestComponent from "./InterestComponent"
import axios from "axios"
import { saveAs } from "file-saver"

const FormComponent: FC = () => {
    const downloadPDF = async () => {
        const url = "http://localhost:8080/download-pdf"
        return axios.get(url, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            responseType: "arraybuffer",
        })
    }

    const generatePDFbyPuppeteer = async () => {
        const { data } = await downloadPDF()
        const blob = new Blob([data], { type: "application/pdf" })
        saveAs(blob, "tickets.pdf")
        console.log("Downloaded maybe")
    }
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

                    <Button
                        id="btnGeneratePDF"
                        onClick={generatePDFbyPuppeteer}
                    >
                        Generate PDF By PUPPETEER
                    </Button>
                </Row>
            </Container>
        </div>
    )
}

export default FormComponent
