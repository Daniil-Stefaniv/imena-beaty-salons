import React from 'react';
import HeaderFirstLine from './HeaderFirstLine/HeaderFirstLine';
import HeaderSecondLine from './HeaderSecondLIne/HeaderSecondLIne';

const Header = () => {
	return (
		<section className=" bg-slate-800 ">
			<HeaderFirstLine
				contactLinks={{
					tel: '74950238750',
					mail: 'info@imena.studios',
					instagram: '3',
					facebook: '3',
					vk: '3',
					youtube: '3',
				}}
			/>
			<HeaderSecondLine
				navMenuItems={[
					'О нас',
					'Коворкинги',
					'Франшиза',
					'Обучение',
					'Блог',
					'Контакты',
				]}
			/>
		</section>
	);
};

export default Header;
