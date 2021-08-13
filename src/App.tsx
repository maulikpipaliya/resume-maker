import React, { FC } from "react"
import FormComponent from "./components/FormComponent"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ResumeView from "./components/ResumeView"
import RMPuppeteer from "./templates/RMPuppeteer"
import ResumeViewComponent from "./components/ResumeViewComponent"

const App: FC = () => {
    return (
        <Router>
            <Route path="/daiict-template" component={ResumeView} exact />
            <Route path="/rm-puppeteer" component={RMPuppeteer} exact />
            <Route
                path="/preview-resume"
                component={ResumeViewComponent}
                exact
            />
            <Route path="/" component={FormComponent} exact />
        </Router>
    )
}

export default App
