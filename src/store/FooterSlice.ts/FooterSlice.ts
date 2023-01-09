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
		RU: '© Imena Studios 2019 | Все права защищены',
		EN: '© Imena Studios 2019 | All rights reserved',
	},

	privacyPolicy: {
		RU: 'Политика конфиденциальности',
		EN: 'Privacy policy',
	},

	footerFormPlaceholders: {
		name: { RU: 'Ваше имя *', EN: 'Your name *' },
		mail: { RU: 'Ваш email *', EN: 'Your email *' },
		text: {
			RU: 'Напишите ваш вопрос здесь *',
			EN: 'Write your question here *',
		},
		submit: { RU: 'ПОДРОБНЕЕ', EN: 'LEARN MORE' },
	},

	formNotice: {
		textBeforeLink: 'Нажимая на кнопку, вы даете',
		textForLink: 'согласие',
		textAfterLink:
			'на обработку персональных данных и соглашаетесь с политикой конфиденциальности.',
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
