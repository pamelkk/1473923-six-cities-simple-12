import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortType } from '../const/const';
import { TReview, TOffer, TSortType } from '../types/types';
import { requireAuthorizationAction, changeCityAction, changeSortAction, getCardsAction, makeCardFavoriteAction, sortCardsAction, uploadCardsAction, getReviewsAction, uploadReviewsAction, getSpecificCardAction } from './actions';
import { sortPriceHigh, sortPriceLow, sortRating } from '../utils';

type TInitialState = {
  offers: TOffer[];
  city: string;
  sorting: string;
  reviews: TReview[];
  reviewsCopy: TReview[];
  offersCopy: TOffer[];
  authorizationStatus: AuthorizationStatus;
  specificOffer: TOffer;
  specificOfferCopy: TOffer;
};

const initialState: TInitialState = {
  offers: [],
  city: 'Paris',
  sorting: 'Popular',
  reviews: [],
  offersCopy: [],
  reviewsCopy: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  specificOffer: {} as TOffer,
  specificOfferCopy: {} as TOffer,
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
    .addCase(uploadCardsAction, (state, action) => {
      const city = action.payload;
      const filteredOffers = state.offersCopy.filter((offer) => offer.city.name === city);

      state.offers = filteredOffers;
    })
    .addCase(getSpecificCardAction, (state, action) => {
      // console.log(action.payload)
      state.specificOffer = action.payload;
      state.specificOfferCopy = action.payload;
      // console.log(state.specificOffer)
    })
    // .addCase(uploadReviewsAction, (state, action) => {
    //   const id = action.payload;
    //   const filteredReviews = state.offersCopy.filter((offer) => offer.id === id);

    //   state.reviews = filteredReviews;
    // })
    .addCase(getReviewsAction, (state, action) => {
      state.reviews = action.payload;
      state.reviewsCopy = action.payload;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(makeCardFavoriteAction, (state, action) => {
      const id = action.payload.id;
      const newStatus = action.payload.favoriteStatus;
      const detectedOffer = state.offersCopy.find((offer) => offer.id === id);
      console.log(detectedOffer)
      // detectedOffer.isFavorite = newStatus;
    })
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
