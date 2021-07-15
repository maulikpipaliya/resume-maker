import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import resumeReducer from "./reducers/resumeReducer";
import { skillReducer } from "./reducers/skillReducer";

const rootReducer = combineReducers({
    resumeData: resumeReducer,
    skills: skillReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
