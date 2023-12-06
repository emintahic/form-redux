import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "../features/FormSlice";
import MultistepSlice from "../features/MultistepSlice";

const formsReducer = FormSlice;
const multistepReducer = MultistepSlice;

const store = configureStore({
  reducer: {
    forms: formsReducer,
    multistep: multistepReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
