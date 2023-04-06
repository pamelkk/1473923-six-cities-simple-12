import { AuthorizationStatus } from '../const/const';

type TCityLocation = {
    latitude: number;
    longitude: number;
    zoom: number;
};

export type TCity = {
    location: TCityLocation;
    name: string;
};

type THost = {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
};

export type TLocation = {
    latitude: number;
    longitude: number;
    zoom: number;
};
export type TOffer = {
    bedrooms: number;
    city: TCity;
    description: string;
    goods: string[];
    host: THost;
    id: number;
    images: string[];
    isFavorite: boolean;
    isPremium: boolean;
    location: TLocation;
    maxAdults: number;
    previewImage: string;
    price: number;
    rating: number;
    title: string;
    type: string;
};

type TUser = {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
};

export type TReview = {
    comment: string;
    date: string;
    id: number;
    rating: number;
    user: TUser;
};

export type TSortType = {
    POPULAR: string;
    PRICE_LOW: string;
    PRICE_HIGH: string;
    TOP: string;
};

export type AuthData = {
    login: string;
    password: string;
};

export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
};

export type UserData = {
    id: number;
    email: string;
    token: string;
};
