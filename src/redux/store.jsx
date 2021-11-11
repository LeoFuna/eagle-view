import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../redux/dashboardSlice';

// https://www.youtube.com/watch?v=3KUVksNAAxo usado para melhor entendimento

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  }
});
