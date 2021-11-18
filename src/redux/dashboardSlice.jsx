import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  units: [],
  assets: [],
  selectedCompany: 'Todas',
  selectedUnit: 'Todas',
  selectedModel: '',
};

export const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    updateUnits(state, { payload }) {
      return { ...state, units: payload }
    },
    updateAssets(state, { payload }) {
      return { ...state, assets: payload };
    },
    updateSelectedCompany(state, { payload }) {
      return { ...state, selectedCompany: payload }
    },
    updateSelectedUnit(state, { payload }) {
      return { ...state, selectedUnit: payload }
    },
    updateSelectedModel(state, { payload }) {
      return { ...state, selectedModel: payload }
    }
  }
});

export const getDashboard = (state) => state.dashboard;

export const { updateUnits, updateAssets, updateSelectedCompany, updateSelectedUnit, updateSelectedModel } = slice.actions;

export default slice.reducer;
