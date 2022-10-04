import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";

// Type for our state
export interface PageState {
  listing: any[];
  selected: any | null;
}

// Initial state
const initialState: PageState = {
  listing: [],
  selected: null,
};

// Actual Slice
export const slice = createSlice({
  name: "page",
  initialState,
  reducers: {
    // Action to set the authentication status
    setPages(state, action) {
      state.listing = action.payload;
    },
    setPage(state, action) {
      state.selected = action.payload;
    },
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.page,
      };
    },
  },
});

export const { setPages, setPage } = slice.actions;

export const selectListing = (state: AppState) => state.page.listing;
export const selectSelected = (state: AppState) => state.page.selected;

export default slice.reducer;
