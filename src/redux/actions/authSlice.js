import { createSlice } from "@reduxjs/toolkit";
import { NotificationManager } from "react-notifications";
import cards from "../../cards.json";
export const checkPinCode = (code) => {
  try {
    const card = cards[0];
    if (card == undefined) {
      NotificationManager.error("Invalid Card");
    } else {

      console.log(card.pincode);
      if (card?.pincode == code) {
        NotificationManager.success("Logged In Successfully");
        return true;
      } else {
        NotificationManager.error("Incorrect Pincode");
      }
    }

  } catch (error) {
    console.log(error);
    NotificationManager.error("Invalid Card");
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
