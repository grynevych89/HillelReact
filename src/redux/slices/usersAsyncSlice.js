import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../constants';

export const fetchUsers = createAsyncThunk('usersAsync/fetchUsers', async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
});

const usersAsyncSlice = createSlice({
  name: 'usersAsync',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAsyncUsers = (state) => state.usersAsync.list;
export const selectAsyncStatus = (state) => state.usersAsync.status;
export const selectAsyncError = (state) => state.usersAsync.error;

export default usersAsyncSlice.reducer;
