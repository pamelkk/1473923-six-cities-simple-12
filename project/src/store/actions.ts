import { createAction } from '@reduxjs/toolkit';
import { offersType } from '../types/types';

export const changeCityAction = createAction('CHANGE_CITY', (newCity: string) => ({ payload: newCity }));

export const uploadCardsAction = createAction('UPLOAD_CARDS', (city: string) => ({ payload: city }));

export const sortCardsAction = createAction('SORT_CARDS', (city: string, sortType: string) => ({ payload: { city, sortType } }));

export const addReviewAction = createAction('ADD_REVIEW', (text: string) => ({ payload: text }));

export const getCardsAction = createAction('GET_CARDS', (offers: offersType[]) => ({ payload: offers }));

// export const getCardsAction = createAction('GET_CARDS', async (dispatch, getState, api) => ({ payload: { offers } }));

// export const getCardsAction = () => async (dispatch, getState, api) => {
//   const offers = await api(getState().offers);
//   dispatch({
//     type: Action.SET_TITLE,
//     payload: offers,
//   });
// };
