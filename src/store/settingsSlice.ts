import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type currencyType = `${string}-${string}-${string}`;

type settingsSliceType = {
   theme: "dark" | "light";
   fontSize: `${number}px`;
   language: "english" | "ukrainian";
   currency: currencyType;
};

const getSettingsFromStorage = () => {
   const storageTheme = localStorage.getItem("storageTheme");
   const storageFontSize = localStorage.getItem("storageFontSize");
   const storageLanguage = localStorage.getItem("storageLanguage");
   const storageCurrency = localStorage.getItem("storageCurrency");
   console.log(storageFontSize);
   return {
      theme: storageTheme || "dark",
      fontSize: storageFontSize || "16px",
      language: storageLanguage || "ukrainian",
      currency: storageCurrency || "UAH-грн-₴"
   } as settingsSliceType;
};

const initialState = getSettingsFromStorage();

const settingsSlice = createSlice({
   name: "settings",
   initialState,
   reducers: {
      changeTheme(state, action: PayloadAction<"dark" | "light">) {
         state.theme = action.payload;
      },
      changeFontSize(state, action: PayloadAction<`${number}px`>) {
         state.fontSize = action.payload;
      },
      changeLanguage(state, action: PayloadAction<"english" | "ukrainian">) {
         state.language = action.payload;
      },
      changeCurrency(state, action: PayloadAction<currencyType>) {
         state.currency = action.payload;
      }
   }
});

export type { currencyType };

export const { changeTheme, changeFontSize, changeLanguage, changeCurrency } =
   settingsSlice.actions;
export const settingsSliceReducer = settingsSlice.reducer;
