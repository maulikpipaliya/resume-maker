import React, { FC } from "react"
import { Container, Form } from "react-bootstrap"
import Accordion from "react-bootstrap/Accordion"

interface IProps {
    children: React.ReactNode
    title: string
}

const FormPanelContainer: FC<IProps> = ({ children, title }) => {
    return (
        <Container>
            <Form className="p-4">
                <h5 className="rm-form-heading py-2">
                    {title}
                    <hr />
                </h5>
                {children}
            </Form>
        </Container>
    )
}

export default FormPanelContainer
