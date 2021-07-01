import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Figure,
    Table,
    Button,
} from "react-bootstrap";
import jsPDF from "jspdf";

function App() {
    const [state, setState] = useState({
        name: "Hrithik Roshan",
        email: "",
        dob: "",
        contact: "",
        city: "",
    });

    const generatePDF = () => {
        console.log("Generating PDF");
        const doc = new jsPDF("p", "pt", "a4");
        // const htmlCode: any = document.querySelector("#ctr-view");
        // console.log(htmlCode);

        doc.setFontSize(40);

        doc.addImage("daiict-logo.png", "JPEG", 15, 40, 180, 180);

        doc.text("My name is Maulik Pipaliya", 40, 20);

        // new DOMParser.parseFromString(htmlCode, "text/xml");
        doc.save("haha.pdf");
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <>
            <Container fluid={true} className='p-0'>
                <Row>
                    <Col xs={10} md={4} className='ctr-form'>
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
