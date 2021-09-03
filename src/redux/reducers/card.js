import { types } from "../actions/types";

const initialState = {
card:[],
isLoggedIn: false
};

const CardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CARD:
      return {
        ...state,
        card: action.payload 
      };
        case types.LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload 
      };
      
    default:    
      return state;
  }
};

export default CardReducer;