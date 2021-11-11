import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assets: [],
};

export const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    updateAssets(state, payload) {
      return { ...state, assets: payload }
    }
  }
});
