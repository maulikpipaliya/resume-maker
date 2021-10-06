import React, { FC } from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Container, Navbar, Nav, Row, Col, Image, Card } from "react-bootstrap"
import "./LandingPage.css"
import GoogleLoginComponent from "../components/GoogleLoginComponent"

import axios from "axios"

const LandingPage: FC = () => {
    return (
        <Container className="ctr-landing">
            <header>
                <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <LinkContainer to="/">
                            <div className="ctr-logo">ResumeMaker</div>
                        </LinkContainer>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto">
                                <a
                                    href="#templates"
                                    className="mx-3 text-sm main-color"
                                >
                                    Templates
                                </a>
                                <a
                                    href="#opportunities"
                                    className="mx-3 text-sm main-color"
                                >
                                    Opportunities
                                </a>
                                <a
                                    href="#aboutus"
                                    className="mx-3 text-sm main-color"
                                >
                                    About us
                                </a>
                            </Nav>
                            <Nav className="ml-auto">
                                <a
                                    href="https://github.com/maulikpipaliya/resume-maker"
                                    className="cp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-github m-3 text-lg main-color h3"></i>
                                </a>

                                <GoogleLoginComponent />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <main>
                <Container>
                    <div className="ctr-mid">
                        <Row className="align-items-center">
                            <Col xs={12} md={5}>
                                <div>
                                    <p className="text-left h1">
                                        Tailor your resume.
                                        <br /> Real Quick.
                                    </p>

                                    <p className="h6">
                                        It's about the career and choices.
                                        Utilize the tools and make the most of
                                        the opportunities
                                    </p>

                                    <button className="rm-home-button rm-home-gs">
                                        <a
                                            href="/"
                                            className="hover-color-white"
                                        >
                                            GET STARTED
                                        </a>
                                    </button>
                                </div>
                            </Col>
                            <Col xs={12} md={7}>
                                <Image
                                    className="home-pic"
                                    src="landing-svgs/undraw_Hiring_re_yk5n.svg"
                                />
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col xs={12} md={7}>
                                <Image
                                    className="home-pic"
                                    src="landing-svgs/undraw_Online_cv_re_gn0a.svg"
                                />
                            </Col>
                            <Col xs={12} md={5}>
                                <div>
                                    <p className="text-right h1">
                                        Preview Your Resume.
                                        <br /> Real Quick.
                                    </p>

                                    <h6 className="text-right">
                                        <p>Why not to see it how it looks?</p>
                                    </h6>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col xs={12} md={5}>
                                <div>
                                    <p className="text-left h1">
                                        Make it professional. <br />
                                        Real Quick.
                                    </p>

                                    <h6 className="text-left">
                                        <p>
                                            Company judges your professionality
                                            based on your resume. So why not
                                            make a professional one?
                                        </p>
                                    </h6>
                                </div>
                            </Col>
                            <Col xs={12} md={7}>
                                <Image
                                    className="home-pic"
                                    src="landing-svgs/undraw_Profile_re_4a55.svg"
                                />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </main>

            <section
                className="main-bg-color br-1 color-white pb-5 px-4"
                id="templates"
            >
                <Container>
                    <h4 className="py-4">Templates</h4>
                    <Row className="color-blue">
                        <Col xs={12} md={4}>
                            <Card style={{ width: "18rem" }} className="br-1">
                                <Card.Img
                                    variant="top"
                                    src="landing-svgs/daiict-format.jpg"
                                    className="br-1"
                                />
                                <Card.Body>
                                    <Card.Title>DAIICT Template</Card.Title>
                                    <Card.Text>
                                        DAIICT University's standard format
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <button className="rm-home-button">
                                        <a
                                            href="/"
                                            className="hover-color-white"
                                        >
                                            Start creating
                                        </a>
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col
                            xs={12}
                            md={{ span: 4, offset: 1 }}
                            className="color-white"
                        >
                            <h5 className="py-2">
                                We are introducing new templates very soon.
                            </h5>
                            <h5 className="py-2">
                                Would appreciate your contribution in bringing
                                in new templates
                            </h5>
                            <h5 className="py-2">
                                Your contribution in open source will be
                                valuable to your career.
                            </h5>
                            <h5 className="py-2">
                                Create your own template and add that
                                contribution to your resume! :p
                            </h5>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="main-bg-color-r  p-4" id="opportunities">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h3 className="my-4">
                                Fun fact: This is Open Source.
                            </h3>
                            <h3 className="my-4">Yes you can contribute.</h3>
                            <h3 className="my-4">
                                We are actively looking for passionate
                                contributors who can make the tool help more and
                                more people.
                            </h3>
                            <h3 className="my-4">A lot to learn.</h3>
                            <button className="rm-home-button px-4 py-2">
                                Connect with us
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <footer className="main-bg-color color-white br-1">
                <Container className="p-4 m-3">
                    <Row>
                        <Col xs={12} md={4}>
                            <LinkContainer to="/">
                                <div className="ctr-logo font-weight-bold color-white">
                                    ResumeMaker
                                </div>
                            </LinkContainer>
                        </Col>
                        <Col xs={12} md={4}>
                            <h5>
                                <p>GET STARTED</p>
                            </h5>
                            <p>
                                <li>Build Resume</li>
                                <li>Templates (Coming soon)</li>
                            </p>
                        </Col>
                        <Col xs={12} md={4}>
                            <h5>
                                <p>RESOURCES</p>
                            </h5>
                            <p>
                                <li>
                                    <a href="https://github.com/maulikpipaliya/resume-maker">
                                        Contribute
                                    </a>
                                </li>
                                <li>About Us</li>
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <p className="text-center">
                        <span>Made with passion.</span>
                    </p>
                </Container>
            </footer>
        </Container>
    )
}

export default LandingPage
