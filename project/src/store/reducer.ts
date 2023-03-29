import { createReducer } from '@reduxjs/toolkit';
import { sortPriceHigh, sortPriceLow, sortRating } from '../const/const';
import { Offers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';
import { SortType } from '../mocks/sortings';
import { offersType } from '../types/types';
import { changeCityAction, sortCardsAction, uploadCardsAction } from './actions';

const initialState = {
  offers: Offers,
  city: 'Paris',
  reviews: reviews,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(uploadCardsAction, (state, action) => {
      const city = action.payload;
      const filteredOffers = state.offers.filter((offer) => offer.city.name === city);

      state.offers = filteredOffers;
    })
    .addCase(sortCardsAction, (state, action) => {
      const city = action.payload.city;
      const sortType = action.payload.sortType;
      const filteredOffers = state.offers.filter((offer) => offer.city.name === city);
      let sortededOffers: offersType[];
      sortededOffers = [];

      if(sortType === SortType.PRICE_LOW) {
        sortededOffers = filteredOffers.sort(sortPriceLow);
      } else if(sortType === SortType.PRICE_HIGH) {
        sortededOffers = filteredOffers.sort(sortPriceHigh);
      } else if(sortType === SortType.TOP) {
        sortededOffers = filteredOffers.sort(sortRating);
      } else if(sortType === SortType.POPULAR) {
        sortededOffers = filteredOffers;
      }

      state.offers = sortededOffers;
    });
});
