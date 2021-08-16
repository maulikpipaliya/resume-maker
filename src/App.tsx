import React, { FC } from "react"
import FormComponent from "./components/FormComponent"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ResumeView from "./components/ResumeView"
import RMPuppeteer from "./templates/RMPuppeteer"
import ResumeViewComponent from "./components/ResumeViewComponent"
import PrintPDF from "./components/PrintPDF"
import TemplateDAIICT from "./templates/TemplateDAIICT"

const App: FC = () => {
    return (
        <Router>
            <Route path="/daiict-template" component={ResumeView} exact />
            <Route path="/rm-puppeteer" component={RMPuppeteer} exact />
            <Route
                path="/preview-resume"
                component={TemplateDAIICT}
                exact
            />
            <Route path="/" component={FormComponent} exact />
        </Router>
    )
}

export default App
