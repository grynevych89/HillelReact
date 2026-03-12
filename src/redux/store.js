import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import usersReducer from './slices/usersSlice';
import usersAsyncReducer from './slices/usersAsyncSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    users: usersReducer,
    usersAsync: usersAsyncReducer,
  },
});

export default store;
