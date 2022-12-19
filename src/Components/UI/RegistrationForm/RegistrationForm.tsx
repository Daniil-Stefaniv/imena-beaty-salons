import React, { useState } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import Input from '../Input/Input';
import RegistrationFormProps from './RegistrationFormTypes';
import ClientSwitch from './ClientSwitch/ClientSwitch';
import RandomKey from '../../../RandomKey/RandomKey';

const RegistrationForm = ({
	clientOrMaster,
	inputsList,
	submitText,
}: RegistrationFormProps) => {
	const dataTemplate: { [key: string]: string } = {};
	inputsList.map(i => {
		dataTemplate[i] = '';
	});

	const [formData, setFormData] = useState<{ [key: string]: string }>(
		dataTemplate
	);

	const updateFormInfo = (e: React.ChangeEvent, param: string) => {
		e.preventDefault();

		const newData = {};
	};

	return (
		<form
			action=""
			className=" w-[575px] grid gris-cols-1 justify-items-center gap-10 rounded-[90px_2px_2px_2px] px-[75px] py-[75px] shadow-[0px_10px_50px_rgba(161,189,227,0.17)]"
		>
			{clientOrMaster === 'client' ? <ClientSwitch /> : ''}

			<div className="w-[425px] grid grid-cols-1 gap-[30px]">
				{inputsList.map(i => (
					<Input
						key={RandomKey()}
						type={'text'}
						theme={'light'}
						placeholder={i}
						name={''}
						value={''}
					/>
				))}
			</div>

			<div className="w-full flex justify-center items-center">
				<span className=" mr-10">
					<CheckBox
						textContent={'ЗАПОМНИТЬ МЕНЯ'}
						handler={(isChecked: boolean) => {
							console.log(isChecked);
						}}
					/>
				</span>

				<a className="text-red-400 select-none" href="">
					{'Забыли пароль?'.toUpperCase()}
				</a>
			</div>

			<p className=" text-center">
				{
					'Для регистрации вам необходимо выбрать коворкинг и отправить запрос через форму на сайте.'
				}
			</p>

			<div className="w-full h-[60px]">
				<Input
					type={'submit'}
					theme={'light'}
					placeholder={submitText.toUpperCase()}
					name={''}
				/>
			</div>
		</form>
	);
};

export default RegistrationForm;
