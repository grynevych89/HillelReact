import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import usersReducer from './slices/usersSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    users: usersReducer,
  },
});

export default store;
