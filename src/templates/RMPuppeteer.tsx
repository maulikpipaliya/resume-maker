import React, { FC } from "react"
import { Button, Col, Container, Row, Table } from "react-bootstrap"
import { base_img } from "../components/base_img"
import "../components/daiict-template-style.css"
import { RootState } from "../store"
import { useSelector } from "react-redux"
import axios from "axios"
import { saveAs } from "file-saver"

const RMPuppeteer: FC = () => {
    const stateData: RootState = useSelector((state: RootState) => state)

    const {
        basics: { data: basicData },
        // education: { data: educationData },
        // skills: { data: skillData },
        // awards: { data: awardData },
        // projects: { data: projectData },
        // interests: { data: interestData },
        // positions: { data: positionData },
        // work: { data: workData },
    } = stateData

    // const downloadPDF = async () => {
    //     const url = "http://localhost:8080/download-pdf"
    //     return axios.get(url, {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //         responseType: "arraybuffer",
    //     })
    // }

    // const generatePDFbyPuppeteer = async () => {
    //     const { data } = await downloadPDF()
    //     const blob = new Blob([data], { type: "application/pdf" })
    //     saveAs(blob, "tickets.pdf")
    //     console.log("Downloaded maybe")
    // }

    return (
        <Container fluid={true} className="p-0">
            <Row>
                <Col>
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
                                                    <span>
                                                        {basicData.name
                                                            ? basicData.name
                                                            : "Your good name here"}
                                                    </span>
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
                                            {/* <tr>
                                                <td>
                                                    <strong>Links</strong>
                                                </td>
                                                <td>
                                                    <a href="https://www.linkedin.com/in/maulikpipaliya/">
                                                        LinkedIn
                                                    </a>
                                                </td>
                                            </tr> */}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </header>
                        <section>
                            <Row>
                                <h3>Education</h3>
                                <hr />
                                <Table>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <strong>Degree</strong>
                                            </th>
                                            <th>
                                                <strong>
                                                    University/Institute
                                                </strong>
                                            </th>
                                            <th>
                                                <strong>Year</strong>
                                            </th>
                                            <th>
                                                <strong>CPI/Aggregate</strong>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>Html</td>
                                            <td>DAIICT</td>
                                            <td>2022</td>
                                            <td>8.93</td>
                                        </tr>
                                        <tr>
                                            <td>BCA</td>
                                            <td>VSNGUIT</td>
                                            <td>2018</td>
                                            <td>8.01</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>
                        </section>
                        <section>
                            <Row>
                                <h3>Skills</h3>
                                <hr />
                                <Table>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <strong>Expertise</strong>
                                            </th>
                                            <th>
                                                <strong>Language</strong>
                                            </th>
                                            <th>
                                                <strong>
                                                    Tools and Technologies
                                                </strong>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>Html</td>
                                            <td>DAIICT</td>
                                            <td>2022</td>
                                        </tr>
                                        <tr>
                                            <td>BCA</td>
                                            <td>VSNGUIT</td>
                                            <td>2018</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>
                        </section>
                        <section>
                            <Row>
                                <h3>Projects</h3>
                                <hr />
                                <Table>
                                    <tbody>
                                        <tr>
                                            <th colSpan={7}>
                                                <strong>Project Title</strong>
                                            </th>
                                            {/* <th colSpan={4}>
                                                <strong>Project Details</strong>
                                            </th> */}
                                            <th colSpan={4}>
                                                <strong>Duration</strong>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td colSpan={7}>Furniture House</td>

                                            <td colSpan={4}>2022-2023</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={7}>
                                                Developed the e-commerce demo
                                                application from scratch using
                                                MERN stack.
                                            </td>
                                            <td colSpan={4}>
                                                <span>
                                                    <strong>Team Size-</strong>2
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={7}>
                                                <span>
                                                    <strong>
                                                        Tools & Technologies -{" "}
                                                    </strong>
                                                    HTML , CSS and JS
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>
                        </section>
                        <section>
                            <Row>
                                <h3>Position of Responsibilities</h3>
                                <hr />
                                <Table>
                                    <tbody>
                                        <tr>
                                            <th colSpan={7}></th>
                                            {/* <th colSpan={4}>
                                                <strong>Project Details</strong>
                                            </th> */}
                                        </tr>
                                        <tr>
                                            <td>
                                                <ul>
                                                    <li>
                                                        Team Leader in Software
                                                        Engineering Project
                                                    </li>
                                                    <li>
                                                        MSc IT Academic
                                                        Representative -
                                                        (DAIICT)
                                                    </li>
                                                    <li>
                                                        Class Representative and
                                                        Academic Committee
                                                        Representative -
                                                        (DAIICT)
                                                    </li>
                                                    <li>
                                                        Volunteer in Mayukh
                                                        Workshop 2019,
                                                        Banasthali Vidyapith
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>
                        </section>
                        <section>
                            <Row>
                                <h3>Certifications</h3>
                                <hr />
                                <Table>
                                    <tbody>
                                        <tr>
                                            <th colSpan={4}>
                                                <strong>
                                                    Certificate Name
                                                </strong>
                                            </th>
                                            {/* <th colSpan={4}>
                                                <strong>Project Details</strong>
                                            </th> */}
                                            <th colSpan={4}>
                                                <strong>Issue Date</strong>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td colSpan={4}>French Diploma</td>

                                            <td colSpan={4}>2022-2023</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={4}>
                                                French Certificate
                                            </td>
                                            <td colSpan={4}>2020-2021</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>
                        </section>
                        <section>
                            <Row>
                                <h3>Interest and Hobbies</h3>
                                <hr />
                                <Table>
                                    <tbody>
                                        <tr>
                                            <th colSpan={7}></th>
                                            {/* <th colSpan={4}>
                                                <strong>Project Details</strong>
                                            </th> */}
                                        </tr>
                                        <tr>
                                            <td>
                                                <ul>
                                                    <li>Baking</li>
                                                    <li>Travelling</li>
                                                    <li>Reading</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>
                        </section>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default RMPuppeteer
