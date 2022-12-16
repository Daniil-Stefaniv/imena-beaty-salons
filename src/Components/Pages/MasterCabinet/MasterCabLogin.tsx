import React from 'react';
import Input from '../../UI/Input/Input';
import CheckBox from '../../UI/CheckBox/CheckBox';

const MasterCabLogin = () => {
	return (
		<div className="px-[571px]">
			<div>
				<a href="">Главная</a>
				<span>/</span>
				<a href=""> вход в Кабинет Мастера</a>
			</div>

			<h1 className="font-bold text-[56px]">Вход в кабинет мастера</h1>

			<form action="">
				<Input
					type={'text'}
					theme={'light'}
					placeholder={'Телефон *'}
					name={'tel'}
					value={''}
				/>
				<Input
					type={'text'}
					theme={'light'}
					placeholder={'Email *'}
					name={'mail'}
					value={''}
				/>
				<div>
					<CheckBox
						textContent={'Hello'}
						handler={(isChecked: boolean) => {
							console.log(isChecked);
						}}
					/>
					<a href=""></a>
				</div>
				<p></p>
				<Input
					type={'submit'}
					theme={'light'}
					placeholder={'ВОЙТИ'}
					name={''}
				/>
			</form>
		</div>
	);
};

export default MasterCabLogin;
