import React from 'react';
import Input from '../../UI/Input/Input';
import CheckBox from '../../UI/CheckBox/CheckBox';
import RegistrationForm from '../../UI/RegistrationForm/RegistrationForm';

const MasterCabLogin = () => {
	return (
		<div className="pt-[96px] pb-[259px] flex flex-col items-center">
			<div>
				<a href="">Главная</a>
				<span>/</span>
				<a href=""> вход в Кабинет Мастера</a>
			</div>

			<h1 className="font-bold text-[56px] whitespace-nowrap">
				Вход в кабинет мастера
			</h1>

			<RegistrationForm
				clientOrMaster={'master'}
				inputsList={['Телефон*', 'Email*']}
				submitText={'войти'}
			/>
		</div>
	);
};

export default MasterCabLogin;
