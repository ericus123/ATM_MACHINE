import {types} from "./types";

export const saveCardRequest = (card) => (dispatch) => {

    try {
      dispatch({type: types.ADD_CARD, payload: card});   
    } catch (error) {
        
    }



};