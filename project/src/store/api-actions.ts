import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../const/const';
import { AppDispatch, State } from '../types/state';
import { AuthData, TReview, TOffer, UserData, TUserComment } from '../types/types';
import { requireAuthorizationAction, getCardsAction, getReviewsAction, getSpecificCardAction, changeLoadingStatusAction, addReviewAction, getNearbyCardsAction, getFavoriteCardsAction } from './actions';
import { dropToken, saveToken } from '../services/token';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    try {
      dispatch(changeLoadingStatusAction(true));
      const { data } = await api.get<TOffer[]>(APIRoute.hotels);
      dispatch(getCardsAction(data));
    } catch (error) {
      console.log('Error');
    }
    finally {
      dispatch(changeLoadingStatusAction(false));
    }
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async (_arg, { dispatch, extra: api }) => {
    try {
      dispatch(changeLoadingStatusAction(true));
      const { data } = await api.get<TOffer[]>(APIRoute.favorite);
      dispatch(getFavoriteCardsAction(data));
    } catch (error) {
      console.log('Error');
    }
    finally {
      dispatch(changeLoadingStatusAction(false));
    }
  },
);

export const fetchSpecificOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSpecificOffer',
  async (offerId, { dispatch, extra: api }) => {
    try {
      dispatch(changeLoadingStatusAction(true));
      const { data: dataRoom } = await api.get<TOffer>(`/hotels/${offerId}`);
      dispatch(getSpecificCardAction(dataRoom));
      const { data: dataReviews } = await api.get<TReview[]>(`/comments/${offerId}`);
      dispatch(getReviewsAction(dataReviews));
      const { data: nearbyOffers } = await api.get<TOffer[]>(`/hotels/${offerId}/nearby`);
      dispatch(getNearbyCardsAction(nearbyOffers));

    } catch (error) {
      console.log('Error');
    }
    finally {
      dispatch(changeLoadingStatusAction(false));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.login);
      dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.login, { email, password });
    saveToken(token);
    dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.logout);
    dropToken();
    dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
  },
);

export const sendReviewAction = createAsyncThunk<void, TUserComment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    try {
      console.log("FETCH")
      dispatch(changeLoadingStatusAction(true));
      const { data } = await api.post<TReview>(`/comments/${id}`, { comment, rating });
      dispatch(addReviewAction(data));
    }
    catch (error) {
      console.log('Error');
    }
    finally {
      dispatch(changeLoadingStatusAction(false));
    }
  },
);
