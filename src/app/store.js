import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/carSilce/carSilce'

export const store = configureStore({
  reducer: {
    car : carReducer
  },
});
