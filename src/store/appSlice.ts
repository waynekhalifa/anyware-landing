import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";

// Type for our state
export interface StateProps {
  slug: string;
  action: string;
  session: any;
  modalOpen: boolean;
  modalID: string;
  modalContent: any;
  snackBarOpen: boolean;
  snackBarSeverity: any;
  snackBarContent: string;
  snackBarPersist: boolean;
  dateRange: any;
}

// Initial state
const initialState: StateProps = {
  slug: "",
  action: "",
  session: null,
  modalOpen: false,
  modalID: "",
  modalContent: null,
  snackBarOpen: false,
  snackBarSeverity: "info",
  snackBarContent: "",
  snackBarPersist: false,
  dateRange: null,
};

// Actual Slice
export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Action to set the authentication status
    setSlug(state, action) {
      state.slug = action.payload;
    },
    setAction(state, action) {
      state.action = action.payload;
    },
    setSession(state, action) {
      state.session = action.payload;
    },
    setModal(state, action) {
      state.modalOpen = action.payload.modalOpen;
      state.modalID = action.payload.modalID;
      state.modalContent = action.payload.modalContent;
    },
    setSnackBar(state, action) {
      state.snackBarOpen = action.payload.snackBarOpen;
      state.snackBarContent = action.payload.snackBarContent;
      state.snackBarSeverity = action.payload.snackBarSeverity;
      state.snackBarPersist = action.payload.snackBarPersist
        ? action.payload.snackBarPersist
        : false;
    },
    setDateRange(state, action) {
      state.dateRange = action.payload;
    },
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.app,
      };
    },
  },
});

export const {
  setSession,
  setModal,
  setSnackBar,
  setDateRange,
  setSlug,
  setAction,
} = slice.actions;

export const selectSlug = (state: AppState) => state.app.slug;
export const selectAction = (state: AppState) => state.app.action;
export const selectSession = (state: AppState) => state.app.session;
export const selectModalOpen = (state: AppState) => state.app.modalOpen;
export const selectModalID = (state: AppState) => state.app.modalID;
export const selectModalContent = (state: AppState) => state.app.modalContent;
export const selectSnackBarOpen = (state: AppState) => state.app.snackBarOpen;
export const selectSnackBarSeverity = (state: AppState) =>
  state.app.snackBarSeverity;
export const selectSnackBarContent = (state: AppState) =>
  state.app.snackBarContent;
export const selectSnackBarPersist = (state: AppState) =>
  state.app.snackBarPersist;
export const selectDateRange = (state: AppState) => state.app.dateRange;

export default slice.reducer;
