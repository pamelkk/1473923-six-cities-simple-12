import { TOffer, TSortType } from '../types/types';

export const ratingInPercent = (rate: number): number => (rate / 5) * 100;

export const sortPriceHigh = (pointA: TOffer, pointB: TOffer) => {
  if (pointB.price > pointA.price) {
    return 1;
  } else if (pointA.price > pointB.price) {
    return -1;
  } else {
    return 0;
  }
};

export const sortPriceLow = (pointA: TOffer, pointB: TOffer) => {
  if (pointB.price < pointA.price) {
    return 1;
  } else if (pointA.price < pointB.price) {
    return -1;
  } else {
    return 0;
  }
};

export const sortRating = (pointA: TOffer, pointB: TOffer) => {
  if (pointB.rating > pointA.rating) {
    return 1;
  } else if (pointA.rating > pointB.rating) {
    return -1;
  } else {
    return 0;
  }
};

export enum APIRoute {
  hotels = '/hotels',
  hotelID = '/hotels/{hotelId}',
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
