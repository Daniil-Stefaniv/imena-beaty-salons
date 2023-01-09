import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialStateTypes, {
	fromValuesTypes,
	inputInfoType,
} from './MasterCabSliceTypes';

const theme = 'light';
const type = 'text';

const inputsList: inputInfoType[] = [
	{
		id: 16875,
		type,
		theme,
		placeholderRU: 'Телефон *',
		placeholderEN: 'Phone *',
		name: 'tel',
	},
	{
		id: 1423142,
		type,
		theme,
		placeholderRU: 'Email *',
		placeholderEN: 'Email *',
		name: 'mail',
	},
];

const initialState: initialStateTypes = {
	formInfo: {
		formConfiguration: 'master',
		inputsList,
		submitText: {
			RU: 'ВОЙТИ',
			EN: 'ENTER',
		},
		checkboxText: {
			RU: 'ЗАПОМНИТЬ МЕНЯ',
			EN: 'REMEMBER ME',
		},
		forgetPasswordText: {
			RU: 'Забыли пароль?',
			EN: 'Forget password?',
			link: '',
		},
		registrationInfo: {
			beforeLinkText: {
				RU: 'Для регистрации вам необходимо выбрать коворкинг и отправить запрос через',
				EN: 'To register, you need to select a coworking space and send an application through',
			},
			link: {
				RU: 'форму на сайте',
				EN: 'form on the site',
				link: '#',
			},
			afterLinkText: {
				RU: '.',
				EN: '.',
			},
		},
	},
	formValues: {
		tel: '',
		mail: '',
	},

	masterCabEnterInfo: {
		naviagtion: {
			previousPage: { RU: 'Главная', EN: 'Main', link: '#' },

			currentPage: {
				RU: 'Вход в Кабинет Мастера', // eslint-disable-next-line quotes
				EN: "Enter to Master's cabinet",
				link: '#',
			},
		},

		mainTitle: {
			RU: 'Вход в Кабинет Мастера', // eslint-disable-next-line quotes
			EN: "Enter to Master's cabinet",
		},
	},
};

const MasterCabSlice = createSlice({
	name: 'MasterCabSlice',
	initialState,
	reducers: {
		updateInfo(state, actions: PayloadAction<fromValuesTypes>) {
			state.formValues = actions.payload;
		},
	},
});

export default MasterCabSlice.reducer;

export const { updateInfo } = MasterCabSlice.actions;
