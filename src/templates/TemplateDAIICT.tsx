import React, { FC } from "react"
import { RootState } from "../store"
import { Row, Col, Container, Image, Table } from "react-bootstrap"
import "./style/TemplateDAIICT.css"
import { convertDate } from "../utils"
import { IAward, ISkill } from "../schema"

interface IProps {
    stateData: RootState
}

const TemplateDAIICT: FC<IProps> = ({ stateData }) => {
    const {
        basics: { data: basicData },
        education: { data: educationData },
        skills: { data: skillData },
        awards: { data: awardData },
        projects: { data: projectData },
        interests: { data: interestData },
        positions: { data: positionData },
        work: { data: workData },
    } = stateData

    return (
        <Container className="rm-da-template" fluid={true}>
            <Row>
                <Col xs={3}>
                    <Image
                        src="http://intranet.daiict.ac.in/~daiict_nt01/Announcement/LOGO/DA-IICT-Emblem-Final%20Colour.png"
                        className="rm-da-logo"
                        roundedCircle
                    />
                </Col>
                <Col xs={8} className="ml-4">
                    <Row className="rm-da-header mt-3 h2 font-weight-bold">
                        {basicData.name === "" ? "John Doe" : basicData.name}
                    </Row>
                    <Row className="h5 mb-3">
                        Dhirubhai Ambani Institute of Information and
                        Communication Technology
                    </Row>
                    <Row className="my-4">
                        <Col xs={1} className="pl-0 font-weight-bold">
                            Email
                        </Col>
                        <Col xs={4}>
                            {basicData.email.map((email, index) => (
                                <>
                                    <span key={index}>{email}</span>
                                    <br />
                                </>
                            ))}
                        </Col>
                        <Col xs={1} className="font-weight-bold">
                            DOB
                        </Col>
                        <Col xs={4}>
                            {basicData.dob !== undefined &&
                                convertDate(basicData.dob)}
                        </Col>
                    </Row>
                    <Row className="my-4 ">
                        <Col xs={1} className="pl-0 font-weight-bold">
                            Contact
                        </Col>
                        <Col xs={4}>{basicData.contact}</Col>
                        <Col xs={1} className="font-weight-bold">
                            City
                        </Col>
                        <Col xs={4}>
                            {basicData.location?.city}{" "}
                            {basicData.location?.region !== "" && (
                                <>, {basicData.location?.region}</>
                            )}
                        </Col>
                    </Row>
                </Col>
            </Row>

            {educationData.length > 0 && (
                <>
                    <h3>EDUCATION DETAILS</h3>
                    <hr />

                    <Row>
                        <Col xs={2} className="font-weight-bold">
                            Degree
                        </Col>
                        <Col xs={6} className="font-weight-bold">
                            University
                        </Col>
                        <Col xs={2} className="font-weight-bold">
                            Year
                        </Col>
                        <Col xs={2} className="font-weight-bold">
                            CPI
                        </Col>
                    </Row>

                    {educationData.map((education, index) => (
                        <Row className="mt-4">
                            <Col xs={2}>{education.degree}</Col>
                            <Col xs={6}>{education.institution}</Col>
                            <Col xs={2}>{education.endYear}</Col>
                            <Col xs={2}>{education.gpa}</Col>
                        </Row>
                    ))}
                </>
            )}

            {/* checking if no skills have been entered */}
            {!Object.values(skillData).every((key: ISkill) => {
                return key.keywords.length === 0
            }) && (
                <>
                    <h3 className="mt-5">SKILLS</h3>

                    <hr />
                    <section className="mt-4">
                        <Row className="my-4">
                            <Col xs={2} className="font-weight-bold">
                                Expertise
                            </Col>
                            <Col xs={6}>
                                {console.log(skillData[0])}
                                {new Array(skillData[0].keywords.join(", "))}
                            </Col>
                        </Row>
                        <Row className="my-4">
                            {" "}
                            <Col xs={2} className="font-weight-bold">
                                Languages
                            </Col>
                            <Col xs={6}>
                                {new Array(skillData[1].keywords.join(", "))}
                            </Col>
                        </Row>
                        <Row className="my-4">
                            {" "}
                            <Col xs={2} className="font-weight-bold">
                                Tools & Technologies
                            </Col>
                            <Col xs={6}>
                                {new Array(skillData[2].keywords.join(", "))}
                            </Col>
                        </Row>
                    </section>
                </>
            )}

            {workData.length > 0 && (
                <>
                    <h3 className="mt-5">PROFESSIONAL EXPERIENCE</h3>
                    <hr />

                    {workData.map((work, index) => (
                        <Row className="mt-4">
                            <Col xs={8}>
                                <strong>{work.company}</strong>
                            </Col>
                            <Col xs={4}>
                                {work.startDate !== undefined &&
                                    convertDate(work.startDate)}
                                {" - "}
                                {work.endDate !== undefined &&
                                    convertDate(work.endDate)}
                            </Col>
                            <Col xs={4}> {work.summary} </Col>
                            <Col xs={8}> {work.highlights} </Col>
                        </Row>
                    ))}
                </>
            )}

            {projectData.length > 0 && (
                <>
                    <h3 className="mt-5">PROJECTS</h3>
                    <hr />

                    {projectData.map((project, index) => (
                        <Row className="mt-4">
                            <Col xs={8}>
                                <strong>{project.name}</strong>
                            </Col>
                            <Col xs={4}> Team Size : {project.teamSize} </Col>
                            <Col xs={8}> {project.summary} </Col>
                            <Col xs={4}>
                                {project.startDate !== undefined &&
                                    convertDate(project.startDate)}
                                {" - "}
                                {project.endDate !== undefined &&
                                    convertDate(project.endDate)}
                            </Col>
                        </Row>
                    ))}
                </>
            )}

            {positionData.length > 0 && (
                <>
                    <h3 className="mt-5">POSITIONS OF RESPONSIBITY</h3>
                    <hr />

                    <ul>
                        {positionData.map((position, index) => (
                            <Row className="mt-4">
                                <li>
                                    <strong>{position.title}</strong>
                                    {" - "}
                                    {position.summary} {" - "}
                                    {position.organization}
                                </li>
                            </Row>
                        ))}
                    </ul>
                </>
            )}

            {awardData.length > 0 && (
                <>
                    <h3 className="mt-5">Awards</h3>
                    <hr />

                    <ul>
                        {awardData.map((award, index) => (
                            <Row className="mt-4">
                                <li>
                                    <strong>{award.title}</strong>
                                    {" - "}
                                    {award.summary} {" - "}
                                    {award.awarder}
                                </li>
                            </Row>
                        ))}
                    </ul>
                </>
            )}

            {interestData.length > 0 && (
                <>
                    <h3 className="mt-5">Interests</h3>
                    <hr />

                    <ul>
                        <section className="mt-4">
                            {interestData.map((interest, index) => (
                                <li>{interest}</li>
                            ))}
                        </section>
                    </ul>
                </>
            )}
        </Container>
    )
}

export default TemplateDAIICT
