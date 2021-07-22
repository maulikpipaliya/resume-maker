import { interestReducer } from "./interestReducer";
import { awardReducer } from "./awardReducer";
import { projectReducer } from "./projectReducer";
import { skillReducer } from "./skillReducer";
import { resumeReducer } from "./resumeReducer";
import { positionReducer } from "./positionReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    resumeData: resumeReducer,
    skills: skillReducer,
    awards: awardReducer,
    projects: projectReducer,
    interests: interestReducer,
    positions: positionReducer,
});

export { rootReducer };
