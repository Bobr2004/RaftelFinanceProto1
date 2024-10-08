import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modalsSliceReducer } from "./modalsSlice";

const rootReducer = combineReducers({
   modals: modalsSliceReducer
});
type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
   reducer: rootReducer
});

export { store };

export type { RootState };
