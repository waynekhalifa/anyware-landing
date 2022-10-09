import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";

// Type for our state
export interface StateProps {
  listing: any[];
  searchText: string;
  selected: null;
}

// Initial state
const initialState: StateProps = {
  listing: [],
  searchText: "",
  selected: null,
};

// Actual Slice
export const slice = createSlice({
  name: "question",
  initialState,
  reducers: {
    // Action to set the authentication status
    setListing(state, action) {
      state.listing = action.payload;
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
    setSelected(state, action) {
      state.selected = action.payload;
    },
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.question,
      };
    },
  },
});

export const { setListing, setSearchText, setSelected } = slice.actions;

export const selectListing = (state: AppState) => state.question.listing;
export const selectSelected = (state: AppState) => state.question.selected;
export const selectSearchText = (state: AppState) => state.question.searchText;

export default slice.reducer;
