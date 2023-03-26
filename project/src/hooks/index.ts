import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, State } from '../types/state';

export const UseAppDispatch = () => useDispatch<AppDispatch>();

export const UseAppSelector: TypedUseSelectorHook<State> = useSelector;
