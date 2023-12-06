import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";

export interface Form {
  ime: string;
  prezime: string;
  email: string;
  adresa: string;
  grad: string;
  drzava: string;
  datumRodjenja: string;
  telefon: string;
}

interface FormsState {
  forms: Form[];
  // form: Form;
}

const initialState: FormsState = {
  forms: [],
  // form: {} as Form,
};

const formsSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    addForm: (state, action: PayloadAction<any>) => {
      state.forms.push(action.payload);
    },
    // addOneForm: (state, action: PayloadAction<any>) => {
    //   state.form = action.payload;
    // },
  },
});

export const { addForm } = formsSlice.actions;

export default formsSlice.reducer;
