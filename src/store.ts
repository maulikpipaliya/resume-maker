import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import resumeReducer from "./reducers/resumeReducer";
import { skillReducer } from "./reducers/skillReducer";
import { awardReducer } from "./reducers/awardReducer";

const rootReducer = combineReducers({
    resumeData: resumeReducer,
    skills: skillReducer,
    awards:awardReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
