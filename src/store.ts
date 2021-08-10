import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import { rootReducer } from "./reducers/index"
import { setStateLocalStorage } from "./reducers/localStorageReducer"

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

setStateLocalStorage()

export type RootState = ReturnType<typeof rootReducer>

export default store
