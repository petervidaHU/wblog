import { configureStore } from '@reduxjs/toolkit';
import visitedReducer from './visitedSlice';

const store = configureStore({
  reducer: {
    visited: visitedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;