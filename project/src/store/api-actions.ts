import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const/const';
import { AppDispatch, State } from '../types/state';
import { offersType } from '../types/types';
import { getCardsAction } from './actions';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<offersType[]>(APIRoute.hotels);
    dispatch(getCardsAction(data));
  },
);
