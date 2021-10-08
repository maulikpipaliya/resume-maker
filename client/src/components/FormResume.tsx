import React, { FC } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import EducationDetailsComponentCopy from "./EducationDetailsComponent"
import BasicDetailsComponent from "./BasicDetailsComponent"
import SkillDetailsComponent from "./SkillDetailsComponent"
import AwardsDetailsComponent from "./AwardsDetailsComponent"
import ProjectComponent from "./ProjectComponent"
import PositionComponent from "./PositionComponent"
import WorkExperienceComponent from "./WorkExperienceComponent"
import InterestComponent from "./InterestComponent"
import axios from "axios"
import { saveAs } from "file-saver"
import "./daiict-template-style.css"
import ReactDOMServer from "react-dom/server"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import TemplateDAIICT from "../templates/TemplateDAIICT"
import { convertToSlug } from "../utils/utils"
import { serverURLs } from "../config"

interface FormResumeProps {
    match: any
}

const FormResume: FC<FormResumeProps> = ({ match }) => {
    console.log("ReactDOMServer")

    const resumeIdx = match.params.idx

    console.log("resumeIdx", resumeIdx)

    const stateDataPDF: RootState = useSelector((state: RootState) => state)

    const getResume = async () => {
        const response = await axios.get(serverURLs.allResumes + resumeIdx)
        console.log("response", response)
    }

    const {
        basics: { data: basicData },
        // education: { data: educationData },
        // skills: { data: skillData },
        // awards: { data: awardData },
        // projects: { data: projectData },
        // interests: { data: interestData },
        // positions: { data: positionData },
        // work: { data: workData },
    } = stateDataPDF
    const strdata = ReactDOMServer.renderToStaticMarkup(
        <TemplateDAIICT stateData={stateDataPDF} />
    )
    console.log(strdata)

    const sendDataToServer = async () => {
        console.log("Sending data")

        console.log(strdata)
        // const dataToSend = {
        //     params: {
        //         htmlString: strdata,
        //     },
        // }

        const url = `${process.env.REACT_APP_SERVER_URL}/downloadPdf`
        return await axios.get(url, {
            params: {
                htmlString: strdata,
            },
            headers: {
                "Content-Type": "multipart/form-data",
            },
            responseType: "arraybuffer",
        })
    }

    console.log("haha")

    const generatePDFbyPuppeteer = async () => {
        // await sendDataToServer()

        const fileName = `${
            convertToSlug(basicData.name) +
            "-" +
            new Date().toISOString().slice(0, 10)
        }.pdf`
        const { data } = await sendDataToServer()
        const blob = new Blob([data], { type: "application/pdf" })
        saveAs(blob, fileName)
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
                        <EducationDetailsComponentCopy></EducationDetailsComponentCopy>
                        <SkillDetailsComponent></SkillDetailsComponent>
                        <WorkExperienceComponent></WorkExperienceComponent>
                        <ProjectComponent></ProjectComponent>
                        <PositionComponent></PositionComponent>
                        <AwardsDetailsComponent></AwardsDetailsComponent>
                        <InterestComponent></InterestComponent>
                    </Col>

                    <Col md={{ span: 8, offset: 4 }}>
                        <TemplateDAIICT
                            stateData={stateDataPDF}
                        ></TemplateDAIICT>
                    </Col>

                    <Button
                        id="btnGeneratePDF"
                        onClick={generatePDFbyPuppeteer}
                        className=""
                    >
                        Generate PDF
                    </Button>
                </Row>
            </Container>
        </div>
    )
}

export default FormResume
