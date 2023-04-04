import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/types';

export const changeCityAction = createAction('CHANGE_CITY', (newCity: string) => ({ payload: newCity }));

export const uploadCardsAction = createAction('UPLOAD_CARDS', (city: string) => ({ payload: city }));

export const changeSortAction = createAction('CHANGE_SORT', (newSortType: string) => ({ payload: newSortType }));

export const sortCardsAction = createAction('SORT_CARDS', (city: string, sortType: string) => ({ payload: { city, sortType } }));

export const addReviewAction = createAction('ADD_REVIEW', (text: string) => ({ payload: text }));

export const getCardsAction = createAction('GET_CARDS', (offers: TOffer[]) => ({ payload: offers }));
