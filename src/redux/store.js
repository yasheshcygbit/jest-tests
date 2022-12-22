import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';

const initialReducer = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: initialReducer,
});
