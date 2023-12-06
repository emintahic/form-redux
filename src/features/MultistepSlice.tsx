import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactElement } from "react";

interface Step {
  index: number;
  text: ReactElement;
}

interface MultistepState {
  currentStep: number;
  steps: Step[];
  currentIndex: number;
  counter: number;
}

const initialState: MultistepState = {
  currentStep: 0,
  steps: [
    { index: 0, text: <dt>Unesi lične podatke</dt> },
    { index: 1, text: <dt>Mjesto boravka</dt> },
    { index: 2, text: <dt>Ostale informacije</dt> },
    { index: 3, text: <dt>Kraj</dt> },
  ],
  currentIndex: 0,
  counter: 0,
};

const multistepSlice = createSlice({
  name: "multistep",
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.currentStep < state.steps.length - 1) {
        state.currentStep += 1;
        state.currentIndex += 1;
      }
    },
    prevStep: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
      }
    },

    goToStep: (state, action: PayloadAction<{ index: number }>) => {
      const { index } = action.payload;
      if (index >= 0 && index < state.steps.length) {
        state.currentStep = index;
      }
    },

    setIndex: (state, action: PayloadAction<{ index: number }>) => {
      const { index } = action.payload;
      state.currentIndex = index;
    },

    updateCounter: (state) => {
      state.counter += 1;
    },
  },
});

export const { nextStep, prevStep, goToStep, setIndex, updateCounter } =
  multistepSlice.actions;
export const selectCurrentStep = (state: { multistep: MultistepState }) =>
  state.multistep.currentStep;
export const selectCurrentIndex = (state: { multistep: MultistepState }) =>
  state.multistep.currentIndex;
export const selectCounter = (state: { multistep: MultistepState }) =>
  state.multistep.counter;
export const selectStep = (state: { multistep: MultistepState }) =>
  state.multistep.steps[state.multistep.currentStep];
export const selectAllSteps = (state: { multistep: MultistepState }) =>
  state.multistep.steps;

export default multistepSlice.reducer;
