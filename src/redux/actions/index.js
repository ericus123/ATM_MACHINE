import {types} from "./types";
import cards from "../../cards.json";
import { simpleNotification } from "../../utils/Notification";

export const saveCardRequest = (card) => (dispatch) => {

    try {

        cards.map((item) => {
           if(item.cvc == card.cvc && item.number == card.number){
             dispatch({type: types.ADD_CARD, payload: item});
           }
        });
  
    } catch (error) {
        
    }
};
export const checkPinCode = (card,code) => (dispatch) => {

    try {
        console.log(card,code);
           if(card.pincode == code){
             dispatch({type: types.LOGGED_IN, payload: true}); 
             simpleNotification("Logged In Successfully","SUCCESS");
           }else{
                   simpleNotification("Incorrect Pincode","ERROR");
           }
      
  
    } catch (error) {
        simpleNotification("Invalid Card","ERROR");
    }
};