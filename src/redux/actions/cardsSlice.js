import { createSlice } from "@reduxjs/toolkit";
import { NotificationManager } from "react-notifications";
import cards from "../../cards.json";




export const saveCardRequest = (card) => {
    try {

        if (card != undefined) {
            if (!card || typeof card !== "object" || !card.cvc || !card.number) {
                throw new Error("Invalid card data: missing fields");
            }

            const exist = cards?.find((item) => item?.cvc === card?.cvc && item?.number === card?.number);
            if (exist) {
                return exist;
            } else {
                throw new Error("Card not found");
            }
        }

    } catch (error) {
        NotificationManager.error(error.message);
    }
};


export const cardsSlice = createSlice({
    name: "cards",
    initialState: { cards: [], error: undefined },
    reducers: {
        addCard: (state, action) => {
            state.cards.push(action.payload);
        },
        handleError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { addCard, handleError } = cardsSlice.actions;

export default cardsSlice.reducer;
