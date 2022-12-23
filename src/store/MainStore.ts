import { configureStore } from '@reduxjs/toolkit';
import FooterSlice from './FooterSlice.ts/FooterSlice';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import LanguageSlice from './LanguageSlice/LanguageSlice';
import HeaderSlice from './HeaderSlice/HeaderSlice';

const store = configureStore({
	reducer: {
		FooterSlice: FooterSlice,
		languageSlice: LanguageSlice,
		headerSlice: HeaderSlice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDiaptch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
