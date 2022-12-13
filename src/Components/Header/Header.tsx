import React, { useContext } from 'react';
import languageContext from '../GlobalContext/GlobalContext';
import Facebook from '../GraphicElements/SociaIcons/Facebook';
import Instagram from '../GraphicElements/SociaIcons/Instagram';
import VK from '../GraphicElements/SociaIcons/VK';
import YouTube from '../GraphicElements/SociaIcons/YouTube';
import AppointmentIcon from '../GraphicElements/UserMatserContactIcons/AppointmentIcon';
import MasterCabIcon from '../GraphicElements/UserMatserContactIcons/MasterCabIcon';
import UserCabIcon from '../GraphicElements/UserMatserContactIcons/UserCabIcon';
import HeaderFirstLine from './HeaderFirstLine/HeaderFirstLine';
import HeaderSecondLine from './HeaderSecondLIne/HeaderSecondLIne';
import {
	clientMasterIntType,
	contactsType,
	socialListType,
} from './HeaderTypes';

const Header = () => {
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

	const navMenuItemsListRu = [
		'Коворкинги',
		'Франшиза',
		'Обучение',
		'Блог',
		'Контакты',
	];

	const navMenuItemsListEn = [
		'About us',
		'Coworkings',
		'Franchise',
		'Teaching',
		'Blog',
		'Contacts',
	];

	return (
		<section className=" bg-slate-800 ">
			<HeaderFirstLine
				contactLinks={contactsList}
				socialList={socialList}
				clientMasterIntList={clientMasterInteraction}
			/>
			<HeaderSecondLine
				navMenuItems={
					selectedLanguage === 'RU'
						? navMenuItemsListRu
						: navMenuItemsListEn
				}
			/>
		</section>
	);
};

export default Header;
