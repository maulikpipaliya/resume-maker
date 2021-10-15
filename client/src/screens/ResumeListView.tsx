import React, { FC, useEffect, useState } from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Container, Navbar, Nav, Row, Col, Image, Card } from "react-bootstrap"
import "./LandingPage.css"
import GoogleLoginComponent from "../components/GoogleLoginComponent"
import axios from "axios"
import { config, serverURLs } from "../config"
import { RootState } from "../store"
import { useSelector } from "react-redux"
import { setResumeIdx } from "../actions/resumeAction"
import { setBasicDataFromDB } from "../actions/basicAction"

const ResumeListView: FC = () => {
    const [resumes, setResumes] = useState([])

    const isLoggedIn = useSelector(
        (state: RootState) => state.auth.data.isLoggedIn
    )

    const resumeSelectHandler = async (index: number) => {
        setResumeIdx(index)
        setBasicDataFromDB(index)
        console.log("dbBasicData")
        // console.log(dbBasicData)
    }

    const getResumes = async () => {
        console.log("getResumes is called")
        const response = await axios.get(serverURLs.allResumes, {
            withCredentials: true,
        })
        console.log("response: ", response)
        setResumes(response.data.data)
    }

    useEffect(() => {
        getResumes()
        return () => {}
    }, [])

    console.log("resumes")
    console.log(resumes)

    useEffect(() => {
        if (!isLoggedIn) {
            window.location.href = "/"
        }
    }, [isLoggedIn])
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
                                    href="/resumes"
                                    className="cp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    My Documents
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
                                <div></div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </main>

            {isLoggedIn ? (
                <section
                    className="main-bg-color br-1 color-white pb-5 px-4"
                    id="templates"
                >
                    <Container>
                        <h4 className="py-4">My Documents</h4>
                        <Row className="color-blue">
                            {resumes.length > 0 &&
                                resumes.map((resume: any, index) => (
                                    <Col xs={12} md={4}>
                                        <Card
                                            style={{ width: "18rem" }}
                                            className="br-1"
                                        >
                                            <Card.Img
                                                variant="top"
                                                src="landing-svgs/daiict-format.jpg"
                                                className="br-1"
                                            />
                                            <Card.Body>
                                                <Card.Title>
                                                    {resume.resumeTitle}
                                                </Card.Title>
                                            </Card.Body>
                                            <Card.Body>
                                                <button className="rm-home-button">
                                                    <a
                                                        href={
                                                            "/resumes/" + index
                                                        }
                                                        className="hover-color-white"
                                                        onClick={() =>
                                                            resumeSelectHandler(
                                                                index
                                                            )
                                                        }
                                                    >
                                                        Select
                                                    </a>
                                                </button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                        </Row>
                    </Container>
                </section>
            ) : (
                <Container>
                    <div>Please log in first</div>
                </Container>
            )}
        </Container>
    )
}

export default ResumeListView
