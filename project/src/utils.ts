import { TOffer } from './types/types';

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

export const ratingInPercent = (rate: number): number => (rate / 5) * 100;
