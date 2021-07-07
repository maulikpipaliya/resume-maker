import React, { useState, useEffect, FC } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { IResumeData, IResumeDataState } from "../schema";
import { updateResumeData } from "../actions/resumeAction";
import { resumeStyle } from "../resumeStyle";

import {
    Container,
    Row,
    Col,
    Form,
    Figure,
    Table,
    Button,
} from "react-bootstrap";

const ResumeView: FC = () => {
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

    return (
        <>
            <Container fluid={true} className='p-0'>
                <Row>
                    <Col md={8} className='ctr-view' id='ctr-view'>
                        <Row className='mx-4 my-4' style={resumeStyle.divStyle}>
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
                                <Table
                                    bordered={false}
                                    style={resumeStyle.tableStyle}
                                >
                                    <tbody>
                                        <tr>
                                            <td colSpan={5}>
                                                Gaurangi Chandra
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
                                                202012080@daiict.ac.in
                                            </td>
                                            <td className='font-weight-bold'>
                                                DOB
                                            </td>
                                            <td>12 Apr 2000</td>
                                        </tr>
                                        <tr>
                                            <td className='font-weight-bold'>
                                                Contact
                                            </td>
                                            <td colSpan={2}>{9876543210}</td>
                                            <td className='font-weight-bold'>
                                                City
                                            </td>
                                            <td>Dehradun</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                    <Button id='btnGeneratePDF' onClick={generatePDF}>
                        Generate PDF
                    </Button>
                </Row>
            </Container>
        </>
    );
};

export default ResumeView;
