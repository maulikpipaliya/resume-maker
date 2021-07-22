import { combineReducers } from "redux";

import { awardReducer } from "./awardReducer";
import { projectReducer } from "./projectReducer";
import { skillReducer } from "./skillReducer";
import { resumeReducer } from "./resumeReducer";

const rootReducer = combineReducers({
    resumeData: resumeReducer,
    skills: skillReducer,
    awards: awardReducer,
    projects: projectReducer,
});

export { rootReducer };
