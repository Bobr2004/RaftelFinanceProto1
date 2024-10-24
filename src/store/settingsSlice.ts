import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type currencyType = `${string}-${string}-${string}`;

type customCurrencyType = {
   id: string;
   currency: currencyType;
};

type customBE = { id: string; name: string };

type customRaftelBE = {
   id: number;
   payments: customBE[];
};

type settingsSliceType = {
   theme: "dark" | "light";
   fontSize: `${number}px`;
   language: "english" | "ukrainian";
   currency: currencyType;
   customCurrencyList: customCurrencyType[];
   customRaftelPaymentList: customRaftelBE[];
   customRaftelExpensesList: customRaftelBE[];
};

const getSettingsFromStorage = () => {
   // get data from localStorage
   const storageTheme = localStorage.getItem("storageTheme");
   const storageFontSize = localStorage.getItem("storageFontSize");
   const storageLanguage = localStorage.getItem("storageLanguage");
   const storageCurrency = localStorage.getItem("storageCurrency");
   const storageCustomCurrencyList = JSON.parse(
      localStorage.getItem("storageCustomCurrencyList") || "[]"
   );
   const storageCustomRaftelPaymentList = JSON.parse(
      localStorage.getItem("storageCustomRaftelPaymentsList") || "[]"
   );

   return {
      theme: storageTheme || "dark",
      fontSize: storageFontSize || "16px",
      language: storageLanguage || "ukrainian",
      currency: storageCurrency || "UAH-грн-₴",
      customCurrencyList: storageCustomCurrencyList || [],
      customRaftelPaymentList: storageCustomRaftelPaymentList || []
   } as settingsSliceType;
};

const addBE = (
   BEType: "customRaftelExpensesList" | "customRaftelPaymentList",
   state: any,
   action: any
) => {
   // If there is no customRaftelPayments stored in local storage yet
   if (!state[BEType].find((rpl: any) => rpl.id === action.payload.raftelId))
      state[BEType].push({
         id: action.payload.raftelId,
         payments: [action.payload.payment]
      });
   // update existing array
   else {
      state[BEType] = state[BEType].map((rpl: any) => {
         if (rpl.id === action.payload.raftelId)
            return {
               id: rpl.id,
               payments: [...rpl.payments, action.payload.payment]
            };
         return rpl;
      });
   }
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
      },
      addCustomCurrency(state, action: PayloadAction<customCurrencyType>) {
         state.customCurrencyList.push(action.payload);
      },
      deleteCustomCurrency(state, action: PayloadAction<string>) {
         state.customCurrencyList = state.customCurrencyList.filter(
            (customCurrency) => customCurrency.id !== action.payload
         );
      },
      addCustomPayment(
         state,
         action: PayloadAction<{ raftelId: number; payment: customBE }>
      ) {
         addBE("customRaftelPaymentList", state, action);
      },
      deleteCustomPayment(
         state,
         action: PayloadAction<{ raftelId: number; BEId: string }>
      ) {
         console.log("oleg");

         state.customRaftelPaymentList = state.customRaftelPaymentList.map(
            (rpl) => {
               if (rpl.id === action.payload.raftelId) {
                  return {
                     id: rpl.id,
                     payments: rpl.payments.filter((py) => {
                        console.log(py.id);
                        console.log(action.payload.BEId);
                        console.log(py.id !== action.payload.BEId);
                        return py.id !== action.payload.BEId;
                     })
                  };
               }
               return rpl;
            }
         );
      }
   }
});

export type { currencyType };

export const {
   changeTheme,
   changeFontSize,
   changeLanguage,
   changeCurrency,
   addCustomCurrency,
   deleteCustomCurrency,
   addCustomPayment,
   deleteCustomPayment
} = settingsSlice.actions;
export const settingsSliceReducer = settingsSlice.reducer;
