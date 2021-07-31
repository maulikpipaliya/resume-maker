import React, { FC } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SkillTagsInput from "./SkillTagsInput";
import {
    expertiseData,
    languagesData,
    toolsAndTechnologiesData,
} from "../skillsData";
import AccordionContainer from "./AccordionContainer";

const SkillDetailsComponent: FC = () => {
    return (
        <AccordionContainer title='Skills'>
            <Container>
                <Row>
                    <Col xs={10} md={10}>
                        <SkillTagsInput
                            tagInputData={expertiseData}
                            placeholder='Expertise'
                            skillType='Expertise'
                        ></SkillTagsInput>
                        <SkillTagsInput
                            tagInputData={languagesData}
                            placeholder='Languages'
                            skillType='Languages'
                        ></SkillTagsInput>
                        <SkillTagsInput
                            tagInputData={toolsAndTechnologiesData}
                            placeholder='Tools and Technologies'
                            skillType='ToolsAndTechnologies'
                        ></SkillTagsInput>
                    </Col>
                </Row>
            </Container>
        </AccordionContainer>
    );
};

export default SkillDetailsComponent;
