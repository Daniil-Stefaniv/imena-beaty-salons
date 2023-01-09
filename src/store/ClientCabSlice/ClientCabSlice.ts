import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import ClientCabInitialState from './ClientCabSliceTypes';
import initialStateTypes, {
	inputInfoType,
} from '../MasterCabSlice/MasterCabSliceTypes';
import ClientCabInitialState from './ClientCabSliceTypes';

const theme = 'light';
const type = 'text';

const registrationInfo = {
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
};

const initialState: ClientCabInitialState = {
	formInfoReg: {
		formConfiguration: 'client',
		inputsList: [
			{
				id: 1679,
				type,
				theme,
				placeholderRU: 'ФИО *',
				placeholderEN: 'Full name *',
				name: 'fullName',
			},
			{
				id: 14236796,
				type,
				theme,
				placeholderRU: 'Email *',
				placeholderEN: 'Email *',
				name: 'mail',
			},
			{
				id: 14236796,
				type,
				theme,
				placeholderRU: 'Пароль *',
				placeholderEN: 'Password *',
				name: 'password',
			},
			{
				id: 14236796,
				type,
				theme,
				placeholderRU: 'Пароль ещё раз *',
				placeholderEN: 'The password again *',
				name: 'duplicatePassword',
			},
		],
		submitText: {
			RU: 'регистрация',
			EN: 'registration',
		},
		checkboxText: {
			RU: 'ЗАПОМНИТЬ МЕНЯ',
			EN: 'REMEMBER ME',
		},
		forgetPasswordText: {
			RU: 'Забыли пароль?',
			EN: 'Forget password?',
			link: '#',
		},
		registrationInfo,
	},

	formInfoSignin: {
		formConfiguration: 'client',
		inputsList: [
			{
				id: 1679,
				type,
				theme,
				placeholderRU: 'Телефон *',
				placeholderEN: 'Phone *',
				name: 'tel',
			},
			{
				id: 14236796,
				type,
				theme,
				placeholderRU: 'Пароль *',
				placeholderEN: 'Password *',
				name: 'password',
			},
		],
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
			link: '#',
		},
		registrationInfo,
	},

	formRegValues: {
		fullName: '',
		mail: '',
		password: '',
		duplicatePassword: '',
	},

	formSigninValues: {
		tel: '',
		password: '',
	},

	clinetCabEnterInfo: {
		naviagtion: {
			previousPage: { RU: 'Главная', EN: 'Main', link: '#' },

			currentPage: {
				RU: 'Вход в Кабинет Клиента', // eslint-disable-next-line quotes
				EN: "Enter to Client's cabinet",
				link: '#',
			},
		},

		mainTitle: {
			RU: 'Кабинет клиента', // eslint-disable-next-line quotes
			EN: "Client's cabinet",
		},
	},

	switcherText: {
		login: {
			RU: 'Вход',
			EN: 'Login',
		},
		registration: {
			RU: 'Регистрация',
			EN: 'Registration',
		},
	},

	modeSwitcher: 'registration',
};

const ClientCabSlice = createSlice({
	name: 'ClientCabSlice',
	initialState,
	reducers: {
		switchMode(state, action: PayloadAction<['registration' | 'login']>) {
			state.modeSwitcher = action.payload[0];
			console.log(state.modeSwitcher);
		},
	},
});

export default ClientCabSlice.reducer;
export const { switchMode } = ClientCabSlice.actions;
