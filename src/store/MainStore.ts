import { configureStore } from '@reduxjs/toolkit';
import FooterSlice from './FooterSlice.ts/FooterSlice';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import LanguageSlice from './LanguageSlice/LanguageSlice';
import HeaderSlice from './HeaderSlice/HeaderSlice';
import MasterCabSlice from './MasterCabSlice/MasterCabSlice';
import ClientCabSlice from './ClientCabSlice/ClientCabSlice';

const store = configureStore({
	reducer: {
		FooterSlice: FooterSlice,
		languageSlice: LanguageSlice,
		headerSlice: HeaderSlice,
		masterCabSlice: MasterCabSlice,
		clientCabSlice: ClientCabSlice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDiaptch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
