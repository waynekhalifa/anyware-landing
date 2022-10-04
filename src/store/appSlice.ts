import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";

// Type for our state
export interface MainState {
  modalOpen: boolean;
  modalContent: ModelContent;
}

export interface ModelContent {
  name: string;
  id?: string;
  formFields?: any[];
  content?: any;
}

// Initial state
const initialState: MainState = {
  modalOpen: false,
  modalContent: {
    name: "",
    id: "",
    formFields: [],
    content: "",
  },
};

// Actual Slice
export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    // Action to set the authentication status
    openModal(state, action) {
      (state.modalOpen = true), (state.modalContent = action.payload);
    },
    closeModal(state, action) {
      (state.modalOpen = false),
        (state.modalContent = {
          name: "",
          id: "",
          formFields: [],
          content: "",
        });
    },
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { openModal, closeModal } = mainSlice.actions;

export const selectModalOpen = (state: AppState) => state.main.modalOpen;
export const selectModalContent = (state: AppState) => state.main.modalContent;

export default mainSlice.reducer;
