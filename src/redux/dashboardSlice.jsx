import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assets: [],
  selectedCompany: 'Todas',
  selectedUnit: 'Todas',
};

export const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    updateAssets(state, { payload }) {
      return { ...state, assets: payload };
    },
    updateSelectedCompany(state, { payload }) {
      return { ...state, selectedCompany: payload }
    },
    updateSelectedUnit(state, { payload }) {
      return { ...state, selectedUnit: payload }
    },
  }
});

export const getDashboard = (state) => state.dashboard;

export const { updateAssets, updateSelectedCompany, updateSelectedUnit } = slice.actions;

export default slice.reducer;
