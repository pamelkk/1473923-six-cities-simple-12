import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const/const';
import { AppDispatch, State } from '../types/state';
import { Review, TOffer } from '../types/types';
import { getCardsAction, getReviewsAction } from './actions';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<TOffer[]>(APIRoute.hotels);
      dispatch(getCardsAction(data));
    } catch (error) {
      console.log('Error');
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Review[]>(APIRoute.reviews);
      dispatch(getReviewsAction(data));
    } catch (error) {
      console.log('Error');
    }
  },
);
