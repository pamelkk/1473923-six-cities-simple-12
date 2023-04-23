import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { offersReducer } from './reducer';

export const api = createAPI();

export const store = configureStore({
  reducer: offersReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
