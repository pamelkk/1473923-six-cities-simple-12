import { TSortType } from '../types/types';

export const MAX_IMAGES = 6;

export const MAX_REVIEWS = 10;

export const MIN_LETTERS_REVIEW = 50;

export const MIN_RATING_REVIEW = 0;

export const MAX_LETTERS_REVIEW = 300;

export const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться!';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  favorites = '/favorites',
  preloader = '/preloader',
  offerId = '/offer/:id',
  login = '/login',
  logout = '/logout'
}

export enum APIRoute {
  hotels = '/hotels',
  favorite = '/favorite',
  login = '/login',
  logout = '/logout'
}

export const SortType: TSortType = {
  POPULAR: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  TOP: 'Top rated first',
};
