import { combineReducers } from "redux";
import CardReducer from "./card";
// function that contains all reducer objects.
const allReducers = combineReducers({
CardReducer
});
export default allReducers;