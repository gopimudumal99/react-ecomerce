import { combineReducers, createStore } from "redux"
import { Reducer } from "./reducer"

const rootReducer = combineReducers({
    Reducer
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
