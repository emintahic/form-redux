import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "../features/FormSlice";

const formsReducer = FormSlice;

const store = configureStore({
  reducer: {
    forms: formsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
