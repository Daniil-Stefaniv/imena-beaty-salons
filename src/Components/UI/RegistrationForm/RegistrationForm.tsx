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
	const emptyForm: { [key: string]: string } = {};
	inputsList.map(i => {
		emptyForm[i] = '';
	});

	const [formData, setformData] = useState<{ [key: string]: string }>(
		emptyForm
	);

	const updateFormInfo = (
		e: React.ChangeEvent<HTMLInputElement>,
		param: string
	) => {
		e.preventDefault();
		const newData: { [key: string]: string } = {};

		Object.assign(newData, formData);

		newData[param] = e.target.value;

		setformData(newData);
	};

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const JSONFormData = JSON.stringify(formData);

		setformData(emptyForm);
	};

	return (
		<form
			onSubmit={e => submitForm(e)}
			action=""
			className="bg-white w-[575px] grid gris-cols-1 justify-items-center gap-10 rounded-[90px_2px_2px_2px] px-[75px] py-[75px] shadow-[0px_10px_50px_rgba(161,189,227,0.17)]"
		>
			{clientOrMaster === 'client' ? <ClientSwitch /> : ''}

			<div className="w-[425px] grid grid-cols-1 gap-[30px]">
				{inputsList.map((i: string, idx: number) => (
					<Input
						key={idx}
						type={'text'}
						theme={'light'}
						placeholder={i}
						name={''}
						value={formData[i]}
						handler={(e: React.ChangeEvent<HTMLInputElement>) =>
							updateFormInfo(e, i)
						}
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

			{clientOrMaster === 'master' ? (
				<p className="text-center">
					Для регистрации вам необходимо выбрать коворкинг и отправить
					запрос через{' '}
					<span className="transition-all cursor-pointer text-red-400 border-b-[1px] border-red-200 hover:border-red-400 pb-[2px]">
						форму на сайте
					</span>
					.
				</p>
			) : (
				''
			)}

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
