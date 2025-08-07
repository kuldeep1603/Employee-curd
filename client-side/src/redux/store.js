import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from "../redux/slice/employeeSlice";

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});