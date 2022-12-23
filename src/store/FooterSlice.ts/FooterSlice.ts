import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import FooterState, { FooterFormData } from './FooterSliceTypes';

const initialState: FooterState = {
	footerFormValues: {
		name: '',
		mail: '',
		text: '',
	},

	footerMainTitle: {
		RU: 'Свяжитесь с нами',
		EN: 'Contact us',
	},

	footerMainDesc: {
		RU: 'Мы будем рады проконсультировать вас по вопросам обслуживания или открытия студии в коворкинге.',
		EN: 'We will offer service based on interests or in a co-working space.',
	},

	copyRights: {
		RU: '',
		EN: '',
	},

	confidencePolicy: {
		RU: '',
		EN: '',
	},

	footerPlaceholders: {
		name: { RU: 'Ваше имя *', EN: 'Your name *' },
		mail: { RU: 'Ваш email *', EN: 'Your email *' },
		text: {
			RU: 'Напишите ваш вопрос здесь *',
			EN: 'Write your question here *',
		},
		submit: { RU: 'ПОДРОБНЕЕ', EN: 'LEARN MORE' },
	},
};

const FooterSlice = createSlice({
	name: 'Footer',
	initialState,
	reducers: {
		updateFormData(state, action: PayloadAction<FooterFormData>) {
			state.footerFormValues = action.payload;
		},
	},
});

export default FooterSlice.reducer;
export const { updateFormData } = FooterSlice.actions;
