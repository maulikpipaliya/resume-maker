import React, { FC } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../store'
import { IEducation, IResumeData, IResumeDataState } from '../schema'
import SkillTagsInput from './SkillTagsInput'

const SkillDetailsComponent: FC = () => {
    return (
        <Container>
            <Form className='p-4'>
                <h5 className='rm-form-heading py-2'>
                    Skills Details
                    <hr />
                </h5>
            </Form>
            <Row>
                <Col xs={10} md={7}>
                    <SkillTagsInput></SkillTagsInput>
                </Col>
            </Row>
        </Container>
    )
}

export default SkillDetailsComponent
