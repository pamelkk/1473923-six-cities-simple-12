import { offersType } from '../types/types';

export const ratingInPercent = (rate: number): number => (rate / 5) * 100;

export const sortPriceHigh = (pointA: offersType, pointB: offersType) => {
  if (pointB.price > pointA.price) {
    return 1;
  } else if (pointA.price > pointB.price) {
    return -1;
  } else {
    return 0;
  }
};

export const sortPriceLow = (pointA: offersType, pointB: offersType) => {
  if (pointB.price < pointA.price) {
    return 1;
  } else if (pointA.price < pointB.price) {
    return -1;
  } else {
    return 0;
  }
};

export const sortRating = (pointA: offersType, pointB: offersType) => {
  if (pointB.rating > pointA.rating) {
    return 1;
  } else if (pointA.rating > pointB.rating) {
    return -1;
  } else {
    return 0;
  }
};
