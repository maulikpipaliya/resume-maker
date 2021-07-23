import React, { useEffect, FC } from "react";
import jsPDF from "jspdf";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { IAward, IResumeData, ISkill } from "../schema";

import { Container, Row, Col, Figure, Table, Button } from "react-bootstrap";
import { convertDate } from "../utils";

const ResumeComponent: FC = () => {
    const stateObj: IResumeData = useSelector(
        (state: RootState) => state.resumeData.data
    );

    const stateData: RootState = useSelector((state: RootState) => state);

    const {
        basics: { data: basicData },
        education: { data: educationData },
        // skills: { data: skillData },
        // awards: { data: awardData },
        // projects: { data: projectData },
        // interests: { data: interestData },
        // positions: { data: positionData },
        // work: { data: workData },
    } = stateData;

    const skills: ISkill[] = useSelector(
        (state: RootState) => state.skills.data
    );
    const awards: IAward[] = useSelector(
        (state: RootState) => state.awards.data
    );

    useEffect(() => {
        return () => {};
    }, [stateObj]);

    const generatePDF = () => {
        console.log("Generating PDF");
        const doc = new jsPDF("p", "pt", "a4");
        const htmlCode: any = document.querySelector("#ctr-view");
        // console.log(htmlCode);

        // new DOMParser.parseFromString(htmlCode, "text/xml");
        doc.html(htmlCode, {
            callback: function (pdf: any) {
                pdf.save("resume-maulik.pdf");
            },
        });
    };

    var divStyle = {
        color: "blak",
        width: "600px",
    };

    const tableStyle = {
        font: "small",
    };
    return (
        <>
            <Container fluid={true} className='p-0'>
                <Row>
                    <Col md={8} className='ctr-view' id='ctr-view'>
                        <Row className='mx-4 my-4' style={divStyle}>
                            <Col md={3} className='text-center'>
                                <Figure>
                                    <Figure.Image
                                        width={171}
                                        height={180}
                                        alt='DAIICT Logo'
                                        src='daiict-logo.png'
                                    />
                                </Figure>
                            </Col>
                            <Col md={8}>
                                <Table bordered={false} style={tableStyle}>
                                    <tbody>
                                        <tr>
                                            <td colSpan={5}>
                                                <h3>
                                                    {basicData.name
                                                        ? basicData.name
                                                        : "Your good name here"}
                                                </h3>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={5}>
                                                Dhirubhai Ambani Institute of
                                                Information and Communication
                                                Technology
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='font-weight-bold'>
                                                Email
                                            </td>
                                            <td colSpan={2}>
                                                {stateObj?.basics?.email.map(
                                                    (item, idx) => {
                                                        return (
                                                            <div key={idx}>
                                                                {stateObj.basics
                                                                    .email[idx]
                                                                    ? stateObj
                                                                          .basics
                                                                          .email[
                                                                          idx
                                                                      ]
                                                                    : ""}
                                                                <br></br>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </td>
                                            <td className='font-weight-bold'>
                                                DOB
                                            </td>
                                            <td>
                                                {convertDate(basicData.dob)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='font-weight-bold'>
                                                Contact
                                            </td>
                                            <td colSpan={2}>
                                                {stateObj.basics.contact}
                                            </td>
                                            <td className='font-weight-bold'>
                                                City
                                            </td>
                                            <td>
                                                {stateObj?.basics?.location
                                                    ?.city +
                                                    ", " +
                                                    stateObj?.basics?.location
                                                        ?.region}
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>

                        <Row className='mx-4 my-4'>
                            <Col>
                                <h4>EDUCATION DETAILS</h4>
                                <hr />

                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <th>Degree</th>
                                            <th>University</th>
                                            <th>Year</th>
                                            <th>CPI/Aggregate</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {educationData?.map((item, idx) => {
                                            return (
                                                <React.Fragment key={idx}>
                                                    <tr>
                                                        <td>{item.degree}</td>
                                                        <td>
                                                            {item.institution}
                                                        </td>
                                                        <td>
                                                            {item.startYear} -{" "}
                                                            {item.endYear}
                                                        </td>
                                                        <td>{item.gpa}</td>
                                                    </tr>
                                                </React.Fragment>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>

                        <Row className='mx-4 my-4'>
                            <Col>
                                <h4>SKILLS</h4>
                                <hr />
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <th>Expertise</th>
                                            <th>Languages</th>
                                            <th>Tools and Technologies</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {skills[0]?.keywords.map(
                                                    (keyword, idx) => (
                                                        <div key={idx}>
                                                            {keyword + ", "}
                                                        </div>
                                                    )
                                                )}
                                            </td>
                                            <td>
                                                {skills[2]?.keywords.map(
                                                    (keyword, idx) => (
                                                        <div key={idx}>
                                                            {keyword + ", "}
                                                        </div>
                                                    )
                                                )}
                                            </td>
                                            <td>
                                                {skills[1]?.keywords.map(
                                                    (keyword, idx) => (
                                                        <div key={idx}>
                                                            {keyword + ", "}
                                                        </div>
                                                    )
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>

                        <Row className='mx-4 my-4'>
                            <Col>
                                <h4>Awards</h4>
                                <hr />

                                <ul>
                                    {awards.map((award, idx) => (
                                        <li key={idx}>
                                            {award.title} - {award.awarder} -{" "}
                                            {award.summary}
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>

                        <Button id='btnGeneratePDF' onClick={generatePDF}>
                            Generate PDF One
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ResumeComponent;
