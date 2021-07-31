import React, { FC, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { IProject } from '../schema'

const ProjectComponent: FC = () => {
    const dispatch = useDispatch()
    const formData: IProject[] = [{ name: '', summary: '' }]

    const [formDataState, setFormDataState] = useState(formData)

    const projectDetailHandler = () => {
        console.log('project detail handler')
    }

    const handleChange = (e: any, idx: number) => {
        const { name, value } = e.currentTarget
        switch (name) {
            case 'name':
            case 'summary':
            case 'teamsize':
            case 'startdate':
            case 'enddate':
                const formDataCopy: IProject[] = [...formDataState]
                const idxPosition: any = { ...formDataCopy[idx] }
                idxPosition[name] = value
                formDataCopy[idx] = idxPosition

                setFormDataState(formDataCopy)
                break
            default:
                break
        }
    }
    return (
        <Container>
            <Form className='p-4'>
                <h5 className='rm-form-heading py-2'>
                    Project Details
                    <hr />
                </h5>
                <Row>
                    <Col xs={10} md={5}>
                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                className='rm-textbox'
                                name='name'
                                onChange={projectDetailHandler}
                            />
                        </Form.Group>
                    </Col>

                    <Col xs={10} md={5}>
                        <Form.Group controlId='teamsize'>
                            <Form.Label>Team-size</Form.Label>
                            <Form.Control
                                className='rm-textbox'
                                name='teamsize'
                                onChange={projectDetailHandler}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10} md={5}>
                        <Form.Group controlId='startdate'>
                            <Form.Label>Start</Form.Label>
                            <Form.Control
                                type='date'
                                name='startdate'
                                className='rm-textbox'
                                onBlur={projectDetailHandler}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={10} md={5}>
                        <Form.Group controlId='enddate'>
                            <Form.Label>End Date</Form.Label>
                            <Form.Control
                                type='date'
                                name='enddate'
                                className='rm-textbox'
                                onBlur={projectDetailHandler}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId='summary'>
                            <Form.Label>Summary/Link</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={3}
                                className='rm-textbox'
                                name='summary'
                            />
                        </Form.Group>
                    </Col>
                    {formDataState.length !== 1 && (
                        <Button className='rm-button'>Remove</Button>
                    )}
                </Row>
            </Form>
        </Container>
    )
}

export default ProjectComponent
