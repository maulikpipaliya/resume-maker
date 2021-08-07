import React, { FC } from "react"
import jsPDF from "jspdf"
import { oldStyle } from "../resumeStyle"
import { Button, Col, Container, Row, Table } from "react-bootstrap"
import "./daiict-template-style.css"
import { base_img } from "./base_img"

const ResumeView: FC = () => {
    const generatePDFbyJSPDF = async () => {
        console.log("Generating PDF")
        const doc = new jsPDF("p", "pt", "a4")
        const htmlCode: any = document.querySelector(".ctr-view")
        console.log(htmlCode)

        doc.textWithLink("test", 30, 30, { url: "https://www.google.com/" })
        await doc.html(htmlCode, {
            callback: function (pdf: any) {
                pdf.save("resume-maulik.pdf")
            },
        })
    }

    return (
        <Container fluid={true} className="p-0">
            <Row>
                <Col
                    md={4}
                    className="bg-dark h-100"
                    style={{ minHeight: "100vh" }}
                >
                    <Button
                        className="text-center"
                        onClick={generatePDFbyJSPDF}
                    >
                        {" "}
                        Generate PDF{" "}
                    </Button>
                </Col>
                <Col md={8}>
                    <div className="ctr-view p-4 m-2 mx-3">
                        {/* <div className="ctr-header border border-primary">
                            <Row>
                                <Col md={1}>1</Col>
                                <Col md={1}>2</Col>
                                <Col md={1}>3</Col>
                                <Col md={1}>4</Col>
                                <Col md={1}>5</Col>
                                <Col md={1}>6</Col>
                                <Col md={1}>7</Col>
                                <Col md={1}>8</Col>
                                <Col md={1}>9</Col>
                                <Col md={1}>10</Col>
                                <Col md={1}>11</Col>
                                <Col md={1}>12</Col>
                            </Row>
                        </div> */}
                        <header>
                            <Row>
                                <Col md={3}>
                                    <img
                                        src={base_img}
                                        alt="DAIICT Logo"
                                        className="m-2 my-4"
                                        width="125px"
                                        height="125px"
                                    />
                                </Col>
                                <Col md={9}>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td
                                                    colSpan={4}
                                                    className="da-name"
                                                >
                                                    <span>Pipaliya Maulik</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Email</strong>
                                                </td>
                                                <td>
                                                    maulik.pipaliya@gmail.com
                                                </td>
                                                <td>
                                                    <strong>DOB</strong>
                                                </td>
                                                <td>30 February 2000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Contact</strong>
                                                </td>
                                                <td>9876543210</td>
                                                <td>
                                                    <strong>City</strong>
                                                </td>
                                                <td>San Francisco</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Links</strong>
                                                </td>
                                                <td>
                                                    <a href="https://www.linkedin.com/in/maulikpipaliya/">
                                                        LinkedIn
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </header>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ResumeView
