import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortType } from '../const/const';
import { TReview, TOffer } from '../types/types';
import { requireAuthorizationAction, changeCityAction, changeSortAction, getCardsAction, sortCardsAction, uploadCardsAction, getReviewsAction, getSpecificCardAction, changeLoadingStatusAction, addReviewAction, getNearbyCardsAction, getFavoriteCardsAction } from './actions';
import { sortPriceHigh, sortPriceLow, sortRating } from '../utils';

type TInitialState = {
  offers: TOffer[];
  nearbyOffers: TOffer[];
  favoriteOffers: TOffer[];
  city: string;
  sorting: string;
  reviews: TReview[];
  reviewsCopy: TReview[];
  offersCopy: TOffer[];
  authorizationStatus: AuthorizationStatus;
  specificOffer?: TOffer;
  isLoading: boolean;
};

const initialState: TInitialState = {
  offers: [],
  nearbyOffers: [],
  favoriteOffers: [],
  city: 'Paris',
  sorting: 'Popular',
  reviews: [],
  offersCopy: [],
  reviewsCopy: [],
  authorizationStatus: AuthorizationStatus.Auth,
  isLoading: false
};

export const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getCardsAction, (state, action) => {
      state.offers = action.payload;
      state.offersCopy = action.payload;
    })
    .addCase(getNearbyCardsAction, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(getFavoriteCardsAction, (state, action) => {
      state.favoriteOffers = action.payload;
      console.log(action.payload)
    })
    .addCase(changeLoadingStatusAction, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(uploadCardsAction, (state, action) => {
      const city = action.payload;
      const filteredOffers = state.offersCopy.filter((offer) => offer.city.name === city);

      state.offers = filteredOffers;
    })
    .addCase(getSpecificCardAction, (state, action) => {
      state.specificOffer = action.payload;
    })
    .addCase(getReviewsAction, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(addReviewAction, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    // .addCase(makeCardFavoriteAction, (state, action) => {
    //   // const id = action.payload.id;
    //   // const newStatus = action.payload.favoriteStatus;
    //   // const detectedOffer = state.offers.find((offer) => offer.id === id);
    //   // console.log(detectedOffer)
    //   // detectedOffer.isFavorite = newStatus;
    // })
    .addCase(changeSortAction, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(sortCardsAction, (state, action) => {
      const city = action.payload.city;
      const sortType = action.payload.sortType;
      const filteredOffers = state.offers.filter((offer) => offer.city.name === city);

      const sortTypeConfig = {
        [SortType.PRICE_LOW]: () => filteredOffers.sort(sortPriceLow),
        [SortType.PRICE_HIGH]: () => filteredOffers.sort(sortPriceHigh),
        [SortType.TOP]: () => filteredOffers.sort(sortRating),
        [SortType.POPULAR]: () => filteredOffers,
      };

      state.offers = sortTypeConfig[sortType]();
    });
});
