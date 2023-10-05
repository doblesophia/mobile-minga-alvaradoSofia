import { createReducer } from "@reduxjs/toolkit";
import  login  from "../actions/loginAction.js";

const initialState = {
  user: null,
  token: null
};

export const loginReducer = createReducer(initialState, (builder) => {
  return builder.addCase(login.fulfilled, (state, action) => {
      return {...state,
        user:action.payload.user, 
        token:action.payload.token}
    })
    // Otros casos de reducción pueden agregarse aquí si es necesario
   
});
