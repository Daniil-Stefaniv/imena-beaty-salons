import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type langType = 'RU' | 'EN';

type InitialStateType = {
	[key: string]: langType[];
};

const initialState: InitialStateType = {
	lang: ['RU'],
	languagesList: ['RU', 'EN'],
};

const LanguageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		switchTheLanguage(state, action: PayloadAction<InitialStateType>) {
			const newLang = action.payload.newVal[0];

			state.lang.splice(0, 1, newLang);
		},
	},
});

export default LanguageSlice.reducer;
export const { switchTheLanguage } = LanguageSlice.actions;
