import React, { useState, useEffect, FormEvent, FC } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import ResumeComponent from "./ResumeComponent";
import BasicDetailsComponent from "./BasicDetailsComponent";
import EducationDetailsComponent from "./EducationDetailsComponent";


const FormComponent: FC = () => {
    return (
        <div>
            <Container fluid={true} className='p-0'>
                <BasicDetailsComponent></BasicDetailsComponent>
                <EducationDetailsComponent></EducationDetailsComponent>
            </Container>
        </div>
    );
};

export default FormComponent;
