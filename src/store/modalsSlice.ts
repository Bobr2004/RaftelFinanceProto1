import { createSlice } from "@reduxjs/toolkit";

type modalsSliceType = {
   isOpen: boolean;
   type: "settings" | "bill" | "description" | "";
};

const initialState: modalsSliceType = {
   isOpen: false,
   type: ""
};

const modalsSlice = createSlice({
   name: "modals",
   initialState,
   reducers: {
      openSettings(state) {
         state.isOpen = true;
         state.type = "settings";
      },
      openBill(state) {
         state.isOpen = true;
         state.type = "bill";
      },
      openDescription(state) {
         state.isOpen = true;
         state.type = "description";
      },
      closeModals(state) {
         state.isOpen = false;
         state.type = "";
      }
   }
});

export const { openSettings, openBill, closeModals, openDescription } = modalsSlice.actions;
export const modalsSliceReducer = modalsSlice.reducer;
