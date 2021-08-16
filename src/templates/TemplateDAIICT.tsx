import React, { FC } from "react"
import { RootState } from "../store"
import { Row, Col, Container, Image } from "react-bootstrap"
import "./style/TemplateDAIICT.css"

interface IProps {
    stateData: RootState
}

const TemplateDAIICT: FC<IProps> = ({ stateData }) => {
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
                        {basicData.name}
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
                        <Col xs={4}>30 February 2020</Col>
                    </Row>
                    <Row className="my-4 ">
                        <Col xs={1} className="pl-0 font-weight-bold">
                            Contact
                        </Col>
                        <Col xs={4}>+91 9876543210</Col>
                        <Col xs={1} className="font-weight-bold">
                            City
                        </Col>
                        <Col xs={4}>Surat, Gujarat</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default TemplateDAIICT
