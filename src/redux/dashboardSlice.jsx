import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assets: [],
};

export const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    updateAssets(state, { payload }) {
      return { ...state, assets: payload };
    },
  }
});

export const getAssets = (state) => state.assets; 

export const { updateAssets } = slice.actions;

export default slice.reducer;
