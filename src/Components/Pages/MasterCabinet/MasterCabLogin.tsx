import React from 'react';
import RegistrationForm from '../../UI/RegistrationForm/RegistrationForm';
import BackGround from '../../GraphicElements/Images/SigninOrSignupBG.png';

const MasterCabLogin = () => {
	return (
		<div className=" relative pt-[96px] pb-[259px] flex flex-col items-center">
			<img
				className="select-none absolute top-[0px] -left-0 w-full h-full -z-40"
				src={BackGround}
			/>

			<div className=" mb-4 w-1/5	 flex justify-between">
				<a
					className="transition-all text-slate-800 hover:text-red-400"
					href=""
				>
					Главная
				</a>
				<span className=" text-gray-400">/</span>
				<a
					className="transition-all text-slate-800 hover:text-red-400"
					href=""
				>
					{' '}
					Вход в Кабинет Мастера
				</a>
			</div>

			<h1 className="mb-20 font-bold text-[56px] text-slate-800 whitespace-nowrap">
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
