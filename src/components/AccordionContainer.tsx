import React, {
    FC,
    JSXElementConstructor,
    ReactElement,
    ReactNode,
    useState,
} from "react"
import { Container, Form, Button, Badge, Row } from "react-bootstrap"
import Accordion from "react-bootstrap/Accordion"

interface IProps {
    children: (ReactElement<any, string | JSXElementConstructor<any>> &
        ReactNode) &
        ReactNode
    title: string
}

const AccordionContainer: FC<IProps> = ({ children, title }) => {
    const [panelOpen, setPanelOpen] = useState(false)

    return (
        <Container>
            <Form className="px-2 py-1">
                <Accordion key={1}>
                    <Accordion.Toggle
                        as={Container}
                        eventKey="1"
                        defaultActiveKey="1"
                        onClick={(e) => setPanelOpen(!panelOpen)}
                    >
                        <h6 className="rm-form-heading py-2 text-sm">
                            <span className="mx-2">
                                {panelOpen && (
                                    <i className="fas fa-caret-down text-white"></i>
                                )}

                                {!panelOpen && (
                                    <i className="fas fa-caret-right text-white"></i>
                                )}
                            </span>
                            {title}
                        </h6>
                    </Accordion.Toggle>
                    <hr />
                    <Accordion.Collapse eventKey="1">
                        {children}
                    </Accordion.Collapse>
                </Accordion>
            </Form>
        </Container>
    )
}

export default AccordionContainer
