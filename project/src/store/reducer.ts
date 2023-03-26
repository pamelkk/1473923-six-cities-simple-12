import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../mocks/cities';
import { Offers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';
import { changeCityAction, uploadCardsAction } from './actions';

const initialState = {
  offers: Offers,
  city: 'Paris',
  reviews: reviews,
  cities: CITIES
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
    });
});
