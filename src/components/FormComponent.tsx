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
import jsPDF from "jspdf"
import "./daiict-template-style.css"
import html2canvas from "html2canvas"
import ReactDOMServer from "react-dom/server"
import Trial1 from "./Trial1"
import { useSelector } from "react-redux"
import { RootState } from "../store"

const FormComponent: FC = () => {
    console.log("ReactDOMServer")
    const stateDataPDF: RootState = useSelector((state: RootState) => state)

    // console.log("strData", strData)

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
        <Trial1 mystatedata={stateDataPDF} />
    )
    console.log(strdata)

    const sendDataToServer = async () => {
        console.log("Sending data")

        console.log(strdata)
        const dataToSend = {
            params: {
                htmlString: strdata,
            },
        }

        const url = "http://localhost:3000/download-pdf"
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
    // const downloadPDF = async () => {
    //     const url = "http://localhost:8080/download-pdf"
    //     return axios.get(url, {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //         responseType: "arraybuffer",
    //     })
    // }

    const generatePDFbyPuppeteer = async () => {
        // await sendDataToServer()

        const { data } = await sendDataToServer()
        const blob = new Blob([data], { type: "application/pdf" })
        saveAs(blob, "tickets.pdf")
        console.log("Downloaded maybe")
    }

    const generatePDFbyJSPDF = async () => {
        console.log("Generating PDF")
        const doc = new jsPDF("p", "pt", "a4")
        const htmlCode: any = document.querySelector(".ctr-view")
        console.log(htmlCode)

        // doc.addFont("Roboto", "sans-serif", "normal")
        // doc.textWithLink("test", 30, 30, { url: "https://www.google.com/" })
        // doc.setFontSize(9)
        await doc.html(htmlCode, {
            callback: function (pdf: any) {
                pdf.save("resume-maulik.pdf")
            },
            // fontFaces: [
            //     {
            //         family: "Roboto",
            //         src: [
            //             {
            //                 url: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
            //                 format: "truetype",
            //             },
            //         ],
            //     },
            // ],
        })
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
                        Generate PDF New
                    </Button>
                </Row>
            </Container>
        </div>
    )
}

export default FormComponent
