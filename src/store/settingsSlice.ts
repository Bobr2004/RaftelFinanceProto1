import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type settingsSliceType = {
   theme: "dark" | "light";
   fontSize: "14px" | "16px" | "18px";
   language: "english" | "ukrainian";
   currency: "UAH" | "USD" | "BIT" | string;
};

const getSettingsFromStorage = () => {
   const storageTheme = localStorage.getItem("storageTheme");
   const storageFontSize = localStorage.getItem("storageFontSize");
   const storageLanguage = localStorage.getItem("storageLanguage");
   const storageCurrency = localStorage.getItem("storageCurrency");
   console.log(storageFontSize)
   return {
      theme: storageTheme || "dark",
      fontSize: storageFontSize || "16px",
      language: storageLanguage || "ukrainian",
      currency: storageCurrency || "UAH"
   } as settingsSliceType;
};

console.log(getSettingsFromStorage())

const initialState = getSettingsFromStorage();

const settingsSlice = createSlice({
   name: "settings",
   initialState,
   reducers: {
      changeTheme(state, action: PayloadAction<"dark" | "light">) {
         state.theme = action.payload;
      },
      changeFontSize(state, action: PayloadAction<"14px" | "16px" | "18px">) {
         state.fontSize = action.payload;
      },
      changeLanguage(state, action: PayloadAction<"english" | "ukrainian">) {
         state.language = action.payload;
      },
      changeCurrency(
         state,
         action: PayloadAction<"UAH" | "USD" | "BIT" | string>
      ) {
         state.currency = action.payload;
      }
   }
});

export const { changeTheme, changeFontSize, changeLanguage, changeCurrency } =
   settingsSlice.actions;
export const settingsSliceReducer = settingsSlice.reducer;
