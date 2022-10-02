
import counterReducer from "./Reduce";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    counterReducer,
})

export default rootReducers;