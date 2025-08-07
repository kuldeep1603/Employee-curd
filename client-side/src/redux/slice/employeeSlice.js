import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/employees';

// fetch all 
export const fetchEmployees = createAsyncThunk('employees/fetchAll', async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

// add 
export const addEmployee = createAsyncThunk('employees/add', async (employee) => {
  const res = await axios.post(API_URL, employee);
  return res.data;
});

// update 
export const updateEmployee = createAsyncThunk('employees/update', async (employee) => {
  const res = await axios.put(`${API_URL}/${employee.id}`, employee);
  return res.data;
});

// delete 
export const deleteEmployee = createAsyncThunk('employees/delete', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});


const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employees.push(action.payload);
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.employees.findIndex(emp => emp.id === action.payload.id);
        if (index !== -1) state.employees[index] = action.payload;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter(emp => emp.id !== action.payload);
      });
  },
});

export default employeeSlice.reducer;
