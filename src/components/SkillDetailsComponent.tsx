import React, { FC } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SkillTagsInput from "./SkillTagsInput";
import {
    expertiseData,
    languagesData,
    toolsAndTechnologiesData,
} from "../skillsData";

const SkillDetailsComponent: FC = () => {
    return (
        <Container>
            <Form className='p-4'>
                <h5 className='rm-form-heading py-2'>
                    Skills Details
                    <hr />
                </h5>
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
            </Form>
        </Container>
    );
};

export default SkillDetailsComponent;
