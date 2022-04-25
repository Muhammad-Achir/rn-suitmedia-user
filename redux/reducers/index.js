import { combineReducers } from "redux";

import userComponentReducer from "./userComponentReducer"

const reducers = combineReducers({
    userComponentReducer: userComponentReducer
})

export default reducers;