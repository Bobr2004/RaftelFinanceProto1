import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type modalsSliceType = {
   isOpen: boolean;
   type: "settings" | "bill" | "description" | "";
   data: any;
};

const initialState: modalsSliceType = {
   isOpen: false,
   type: "",
   data: null
};

const modalsSlice = createSlice({
   name: "modals",
   initialState,
   reducers: {
      openSettings(state) {
         state.isOpen = true;
         state.type = "settings";
      },
      openBill(state, action: PayloadAction<any>) {
         state.isOpen = true;
         state.type = "bill";
         console.log(action);
         state.data = action.payload;
         console.log(state.data);
      },
      openDescription(state) {
         state.isOpen = true;
         state.type = "description";
      },
      closeModals(state) {
         state.isOpen = false;
         state.type = "";
         state.data = null;
      }
   }
});

export const { openSettings, openBill, closeModals, openDescription } =
   modalsSlice.actions;
export const modalsSliceReducer = modalsSlice.reducer;
