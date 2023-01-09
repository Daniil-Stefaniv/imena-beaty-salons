import { createSlice } from '@reduxjs/toolkit';
import InitialStateType from './HeaderSliceTypes';
import RandomKey from '../../RandomKey/RandomKey';

const initialState: InitialStateType = {
	contacts: [
		{
			value: '+7 (495) 023-87-50',
			link: 'tel:+74950238750',
		},
		{
			value: 'info@imena.studios',
			link: 'mailto:info@imena.studios',
		},
	],

	socials: [
		{ link: '/NotFound', icon: 'InstagramIcon' },
		{ link: '/NotFound', icon: 'FacebookIcon' },
		{ link: 'https://vk.com/', icon: 'VKIcon' },
		{ link: 'https://www.youtube.com/', icon: 'YouTubeIcon' },
	],

	cabinetsAndAppointments: [
		{
			contentRU: 'Кабинет клиента',
			contentEN: 'Client Cabinet',
			icon: 'ClinetCabIcon',
			// eslint-disable-next-line quotes
			link: "/Client'sLogin",
		},
		{
			contentRU: 'Кабинет мастера',
			// eslint-disable-next-line quotes
			contentEN: "Master's office",
			icon: 'MasterCabIcon',
			// eslint-disable-next-line quotes
			link: "/Master'sLogin",
		},
		{
			contentRU: 'Онлайн-запись',
			contentEN: 'Online appointment',
			icon: 'AppointmentIcon',
			link: '/',
		},
	],

	navMenuList: [
		{ textValueRU: 'Коворкинги', textValueEN: 'Coworkings', link: '#' },
		{ textValueRU: 'Франшиза', textValueEN: 'Franchise', link: '#' },
		{ textValueRU: 'Обучение', textValueEN: 'Teaching', link: '#' },
		{ textValueRU: 'Блог', textValueEN: 'Blog', link: '#' },
		{ textValueRU: 'Контакты', textValueEN: 'Contacts', link: '#' },
	],

	dropDownMenu: {
		nameRU: 'О нас',
		nameEN: 'About us',
		optionsList: [
			{
				id: new Date().toISOString() + RandomKey(),
				nameRU: 'Наши студии',
				nameEN: 'Our studios',
				link: '#',
			},
			{
				id: new Date().toISOString() + RandomKey(),
				nameRU: 'Клиентам',
				nameEN: 'Clients',
				link: '#',
			},
			{
				id: new Date().toISOString() + RandomKey(),
				nameRU: 'Владельцам помещений',
				nameEN: 'For owners of premises',
				link: '#',
			},
			{
				id: new Date().toISOString() + RandomKey(),
				nameRU: 'Инвесторам',
				nameEN: 'Investors',
				link: '#',
			},
		],
	},

	searchBtnText: {
		RU: 'Найти мастера или коворкинг',
		EN: 'Find a craftsman or co-working',
	},
};

const HeaderSlice = createSlice({
	name: 'HeaderSlice',
	initialState,
	reducers: {},
});

export default HeaderSlice.reducer;
