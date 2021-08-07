import React, { FC } from "react"
import FormComponent from "./components/FormComponent"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ResumeView from "./components/ResumeView"

const App: FC = () => {
    return (
        <Router>
            <Route path="/daiict-template" component={ResumeView} exact />
            <Route path="/" component={FormComponent} exact />
        </Router>
    )
}

export default App
