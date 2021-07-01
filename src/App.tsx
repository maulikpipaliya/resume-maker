import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {
    Container,
    Row,
    Col,
    Form,
    Figure,
    Table,
    Button,
} from "react-bootstrap";

function App() {
    const [state, setState] = useState({
        name: "Hrithik Roshan",
        email: "",
        dob: "",
        contact: "",
        city: "",
    });

    const getCanvas = (page: any) => {
        const a4 = [595, 842]; // for a4 size paper width and height in pixels

        //page.height((a4[1] * 1.3333) - 80).css('max-height','none');
        return html2canvas(page, {
            imageTimeout: 2000,
            removeContainer: true,
        });
    };

    const generatePDF = () => {
        console.log("Generating PDF");
        const doc = new jsPDF("p", "px", "a4");
        // var doc = new jsPDF({
        //     unit: 'mm',
        //     format: 'a4',
        // });
        // console.log(htmlCode);

        const a4width = 210; //in mm
        const a4height = 297;
        const a4 = [595, 842]; // for a4 size paper width and height in pixels

        const input: any = document.querySelector("#ctr-view");

        getCanvas(input).then(function (canvas) {
            const img = canvas.toDataURL("image/png");
            const height = 0;
            // = 0.264583 * canvas.height;
            console.log(canvas.width);
            doc.addImage(
                img,
                "JPEG",
                2,
                7,
                canvas.width / 3,
                canvas.height / 3
            );

            doc.save("download.pdf");
        });
    };
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <>
            <Container fluid={true} className='p-0'>
                <Row>
                    <Col xs={10} md={4} className='ctr-form' id='ctr-form'>
                        <Container>
                            <Form className='p-4'>
                                <Form.Group controlId='name'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        className='rm-textbox'
                                        name='name'
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId='email'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type='email'
                                        name='email'
                                        className='rm-textbox'
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId='dob'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type='date'
                                        name='dob'
                                        className='rm-textbox'
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId='contact'>
                                    <Form.Label>Contact</Form.Label>
                                    <Form.Control
                                        name='contact'
                                        className='rm-textbox'
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId='city'>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        name='city'
                                        className='rm-textbox'
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Form>
                        </Container>
                    </Col>
                    <Col md={8} className='ctr-view' id='ctr-view'>
                        <Row className='mx-4 my-4'>
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
                                <Table bordered={false}>
                                    <tbody>
                                        <tr>
                                            <td colSpan={5} className='h3'>
                                                {state.name}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={5} className='h6'>
                                                Dhirubhai Ambani Institute of
                                                Information and Communication
                                                Technology
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='font-weight-bold'>
                                                Email
                                            </td>
                                            <td colSpan={2}>{state.email}</td>
                                            <td className='font-weight-bold'>
                                                DOB
                                            </td>
                                            <td>{state.dob}</td>
                                        </tr>
                                        <tr>
                                            <td className='font-weight-bold'>
                                                Contact
                                            </td>
                                            <td colSpan={2}>{state.contact}</td>
                                            <td className='font-weight-bold'>
                                                City
                                            </td>
                                            <td>{state.city}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Button id='btnGeneratePDF' onClick={generatePDF}>
                            Generate PDF
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
