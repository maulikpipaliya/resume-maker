import React, { FC } from "react"
import FormComponent from "./components/FormComponent"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ResumeStyling from "./components/ResumeStyling"

const App: FC = () => {
    return (
        <Router>
            <Route path="/resume-style" component={ResumeStyling} exact />
            <Route path="/" component={FormComponent} exact />
        </Router>
    )
}

export default App
