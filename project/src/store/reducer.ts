import { createReducer } from '@reduxjs/toolkit';
import { sortPriceHigh, sortPriceLow, sortRating, SortType } from '../const/const';
import { reviews } from '../mocks/reviews';
import { TOffer, TSortType } from '../types/types';
import { changeCityAction, changeSortAction, getCardsAction, makeCardFavoriteAction, sortCardsAction, uploadCardsAction } from './actions';

const initialState = {
  offers: [] as TOffer[],
  city: 'Paris',
  sorting: 'Popular',
  reviews: reviews,
  offersCopy: [] as TOffer[]
};

export const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(uploadCardsAction, (state, action) => {
      const city = action.payload;
      const filteredOffers = state.offersCopy.filter((offer) => offer.city.name === city);

      state.offers = filteredOffers;
    })
    .addCase(getCardsAction, (state, action) => {
      state.offers = action.payload;
      state.offersCopy = action.payload;
    })
    // .addCase(makeCardFavoriteAction, (state, action) => {
    //   const id = action.payload.id;
    //   const newStatus = action.payload.favoriteStatus;
    //   const detectedOffer = state.offers.filter((offer) => offer.id === id);
    //   console.log(state.offers)
    // })
    .addCase(changeSortAction, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(sortCardsAction, (state, action) => {
      const city = action.payload.city;
      const sortType = action.payload.sortType;
      const filteredOffers = state.offers.filter((offer) => offer.city.name === city);

      const sortTypeConfig: Record<TSortType, () => TOffer[]> = {
        [SortType.PRICE_LOW]: () => filteredOffers.sort(sortPriceLow),
        [SortType.PRICE_HIGH]: () => filteredOffers.sort(sortPriceHigh),
        [SortType.TOP]: () => filteredOffers.sort(sortRating),
        [SortType.POPULAR]: () => filteredOffers,
      };

      state.offers = sortTypeConfig[sortType]();
    });
});
