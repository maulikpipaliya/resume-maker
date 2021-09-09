import { interestReducer } from "./interestReducer"
import { awardReducer } from "./awardReducer"
import { educationReducer } from "./educationReducer"
import { projectReducer } from "./projectReducer"
import { skillReducer } from "./skillReducer"
// import { resumeReducer } from "./resumeReducer"
import { positionReducer } from "./positionReducer"
import { workReducer } from "./workReducer"
import { basicReducer } from "./basicReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    // resumeData: resumeReducer,
    basics: basicReducer,
    education: educationReducer,
    skills: skillReducer,
    awards: awardReducer,
    projects: projectReducer,
    interests: interestReducer,
    positions: positionReducer,
    work: workReducer,
})

export { rootReducer }
