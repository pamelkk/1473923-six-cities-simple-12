import { createAction } from '@reduxjs/toolkit';

export const CHANGE_CITY = 'CHANGE_CITY';
export const UPLOAD_CARDS = 'UPLOAD_CARDS';
export const ADD_REVIEW = 'ADD_REVIEW';
export const SORT_CARDS = 'ADD_REVIEW';

export const changeCityAction = createAction(CHANGE_CITY, (newCity: string) => ({payload: newCity}));

export const uploadCardsAction = createAction(UPLOAD_CARDS, (city: string) => ({payload: city}));

export const sortCardsAction = createAction(SORT_CARDS, (city: string, sortType: string) => ({payload: {city, sortType}}));

export const addReviewAction = createAction(ADD_REVIEW, (text: string) => ({payload: text}));
