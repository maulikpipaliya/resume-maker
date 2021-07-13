import React, { useState, useEffect, FC } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { IResumeData, IResumeDataState } from "../schema";
import { updateResumeData } from "../actions/resumeAction";

import {
    Container,
    Row,
    Col,
    Form,
    Figure,
    Table,
    Button,
} from "react-bootstrap";

const ResumeComponent: FC = () => {
    const stateObj: IResumeData = useSelector(
        (state: RootState) => state.resumeData.data
    );

    console.log("--from resume page--");
    console.log(stateObj);

    useEffect(() => {
        console.log("--from resume page--");
        console.log(stateObj);
        return () => {};
    }, [stateObj]);

    const getCanvas = (page: any) => {
        const a4 = [595, 842]; // for a4 size paper width and height in pixels

        //page.height((a4[1] * 1.3333) - 80).css('max-height','none');
        return html2canvas(page, {
            imageTimeout: 2000,
            removeContainer: true,
        });
    };

    const previewPDF = () => {};

    const generatePDF = () => {
        console.log("Generating PDF");
        const doc = new jsPDF("p", "pt", "a4");
        const htmlCode: any = document.querySelector("#ctr-view");
        console.log(htmlCode);

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
                                                    {stateObj.basics.name
                                                        ? stateObj.basics.name
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
                                                            <>
                                                            {stateObj.basics.email[idx] ? stateObj.basics.email[idx] : ""}
                                                            <br></br>
                                                            </>
                                                        );
                                                    }
                                                )}
                                            </td>
                                            <td className='font-weight-bold'>
                                                DOB
                                            </td>
                                            <td>{stateObj.basics.dob}</td>
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
                                        {stateObj?.education?.map(
                                            (item, idx) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>{item.area}</td>
                                                            <td>
                                                                {
                                                                    item.institution
                                                                }
                                                            </td>
                                                            <td>
                                                                {item.startDate}{" "}
                                                                - {item.endDate}
                                                            </td>
                                                            <td>{item.gpa}</td>
                                                        </tr>
                                                    </>
                                                );
                                            }
                                        )}
                                    </tbody>
                                </Table>
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
