import { TSortType } from '../types/types';

export const MAX_IMAGES = 6;

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
  hotelNear = '/hotels/{hotelId}/nearby',
  reviews = '/comments/{hotelId}',
  reviewsHotelId = '/comments/{hotelId}',
  login = '/login',
  logout = '/logout'
}

export const SortType: TSortType = {
  POPULAR: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  TOP: 'Top rated first',
};
