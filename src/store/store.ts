import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modalsSliceReducer } from "./modalsSlice";
import { settingsSliceReducer } from "./settingsSlice";

const rootReducer = combineReducers({
   modals: modalsSliceReducer,
   settings: settingsSliceReducer
});
type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
   reducer: rootReducer
});

export { store };

export type { RootState };
