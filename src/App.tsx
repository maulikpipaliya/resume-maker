import React, { FC } from "react";
import FormComponent from "./components/FormComponent";
import ResumeComponent from "./components/ResumeComponent";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App: FC = () => {

    return (
        <Router>
            <Route path='/preview-resume' component={ResumeComponent} exact/>
            <Route path='/' component={FormComponent} exact/>
        </Router>
    );
};

export default App;
