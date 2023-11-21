import { combineReducers } from "@reduxjs/toolkit";
import { default as authReducer } from "../actions/authSlice";
import { default as cardsReducer } from "../actions/cardsSlice";

const rootReducer = combineReducers({
    cards: cardsReducer,
    auth: authReducer,
});

export default rootReducer;
