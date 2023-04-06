import { createAction } from '@reduxjs/toolkit';
import { TReview, TOffer } from '../types/types';
import { AuthorizationStatus } from '../const/const';

//Изменить город
export const changeCityAction = createAction('CHANGE_CITY', (newCity: string) => ({ payload: newCity }));

//Запрос предложений
export const getCardsAction = createAction('GET_CARDS', (offers: TOffer[]) => ({ payload: offers }));

//Запрос определенного предложения
export const getSpecificCardAction = createAction('GET_SPECIFIC_CARD', (offer: TOffer) => ({ payload: offer }));

//Отрисовка предложений
export const uploadCardsAction = createAction('UPLOAD_CARDS', (city: string) => ({ payload: city }));

//Добавить/убрать карточку из избранного
export const makeCardFavoriteAction = createAction('MAKE_CARD_FAVORITE', (id: number, favoriteStatus: boolean) => ({ payload: {id, favoriteStatus} }));

//Сортировка
export const changeSortAction = createAction('CHANGE_SORT', (newSortType: string) => ({ payload: newSortType }));
export const sortCardsAction = createAction('SORT_CARDS', (city: string, sortType: string) => ({ payload: { city, sortType } }));

//Запрос отзывов
export const getReviewsAction = createAction('GET_REVIEWS', (reviews: TReview[]) => ({ payload: reviews }));

//Отрисовка отзывов
export const uploadReviewsAction = createAction('UPLOAD_REVIEWS', (id: number) => ({ payload: id }));

//Добавить отзыв
export const addReviewAction = createAction('ADD_REVIEW', (text: string) => ({ payload: text }));

//Авторизация
export const requireAuthorizationAction = createAction<AuthorizationStatus>('REQUIRE_AUTH_STATUS');
