import React, { FC } from "react"
import { Container, Row, Col } from "react-bootstrap"
import InterestTagsInput from "./InterestTagsInput"
import { interestData } from "../interestData"
import AccordionContainer from "./AccordionContainer"

const InterestComponent: FC = () => {
    return (
        <AccordionContainer title="Interests">
            <Container>
                <Row>
                    <Col xs={10} md={10}>
                        <InterestTagsInput
                            tagInputData={interestData}
                            placeholder="Add Interests"
                        ></InterestTagsInput>
                    </Col>
                </Row>
            </Container>
        </AccordionContainer>
    )
}

export default InterestComponent
