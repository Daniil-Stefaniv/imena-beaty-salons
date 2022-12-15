import React, { useContext } from 'react';
import languageContext from '../../Components/GlobalContext/GlobalContext';
import {
	clientMasterIntType,
	contactsType,
	socialListType,
} from '../../Components/Header/HeaderTypes';
import Instagram from '../../Components/GraphicElements/SociaIcons/Instagram';
import AppointmentIcon from '../../Components/GraphicElements/UserMatserContactIcons/AppointmentIcon';
import MasterCabIcon from '../../Components/GraphicElements/UserMatserContactIcons/MasterCabIcon';
import UserCabIcon from '../../Components/GraphicElements/UserMatserContactIcons/UserCabIcon';
import Facebook from '../../Components/GraphicElements/SociaIcons/Facebook';
import VK from '../../Components/GraphicElements/SociaIcons/VK';
import YouTube from '../../Components/GraphicElements/SociaIcons/YouTube';

const HeaderAndFooterData = () => {
	const { selectedLanguage } = useContext(languageContext);

	const contactsList: contactsType = {
		tel: '74950238750',
		mail: 'info@imena.studios',
	};

	const socialList: socialListType = {
		instagram: { link: '3', icon: <Instagram /> },
		facebook: { link: '3', icon: <Facebook /> },
		vk: { link: '3', icon: <VK /> },
		youtube: { link: '3', icon: <YouTube /> },
	};

	const clientMasterInteraction: clientMasterIntType = {
		clientCab: {
			content:
				selectedLanguage === 'RU'
					? 'Кабинет клиента'
					: 'Client Cabinet',
			icon: <UserCabIcon classes={'mr-[10px]'} />,
			link: '',
		},
		masterCab: {
			content:
				selectedLanguage === 'RU'
					? 'Кабинет мастера' // eslint-disable-next-line quotes
					: "Master's Cabinet",
			icon: <MasterCabIcon classes={'mr-[10px]'} />,
			link: '',
		},
		onlineEntry: {
			content:
				selectedLanguage === 'RU'
					? 'Онлайн-запись'
					: 'Online Enrollment',
			icon: <AppointmentIcon classes={'mr-[10px]'} />,
			link: '',
		},
	};

	const navMenuItemsList = [
		selectedLanguage === 'RU' ? 'Коворкинги' : 'Coworkings',
		selectedLanguage === 'RU' ? 'Франшиза' : 'Franchise',
		selectedLanguage === 'RU' ? 'Обучение' : 'Teaching',
		selectedLanguage === 'RU' ? 'Блог' : 'Blog',
		selectedLanguage === 'RU' ? 'Контакты' : 'Contacts',
	];

	const aboutUsOpList = {
		one: {
			link: '#',
			content: selectedLanguage === 'RU' ? 'Один' : 'One',
		},
		two: {
			link: '#',
			content: selectedLanguage === 'RU' ? 'Два' : 'Two',
		},
		three: {
			link: '#',
			content: selectedLanguage === 'RU' ? 'Три' : 'Three',
		},
		four: {
			link: '#',
			content: selectedLanguage === 'RU' ? 'Четыре' : 'Four',
		},
	};

	return {
		contactsList,
		socialList,
		clientMasterInteraction,
		navMenuItemsList,
		aboutUsOpList,
	};
};

export default HeaderAndFooterData;
