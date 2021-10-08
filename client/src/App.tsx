import React, { FC } from "react"
import FormComponent from "./components/FormComponent"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ResumeView from "./components/ResumeView"
import RMPuppeteer from "./templates/RMPuppeteer"
import TemplateDAIICT from "./templates/TemplateDAIICT"
import GoogleLoginComponent from "./components/GoogleLoginComponent"
import LandingPage from "./screens/LandingPage"
import ResumeListView from "./screens/ResumeListView"
import FormResume from "./components/FormResume"
import Switch from "react-bootstrap/esm/Switch"
import { useSelector } from "react-redux"
import { RootState } from "./store"

const App: FC = () => {
    const isLoggedIn: boolean = useSelector(
        (state: RootState) => state.auth.data.isLoggedIn
    )

    return (
        <Router>
            <Route path="/daiict-template" component={ResumeView} exact />
            <Route path="/rm-puppeteer" component={RMPuppeteer} exact />
            <Route path="/preview-resume" component={TemplateDAIICT} exact />
            <Route path="/googleLogin" component={GoogleLoginComponent} exact />
            <Route path="/landing" component={LandingPage} exact />
            <Route path="/resumes" component={ResumeListView} exact />

            <Route path="/resumes/:idx" component={FormResume} exact />

            <Route path="/" component={FormComponent} exact />
        </Router>
    )
}

export default App
