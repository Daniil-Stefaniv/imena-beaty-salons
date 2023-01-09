import React, { useState } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import Input from '../Input/Input';
import RegistrationFormProps from './RegistrationFormTypes';
import { useAppSelector } from '../../../store/MainStore';
import { useDispatch } from 'react-redux';
import { updateInfo } from '../../../store/MasterCabSlice/MasterCabSlice';
import { switchMode } from '../../../store/ClientCabSlice/ClientCabSlice';

const RegistrationForm: React.FC<RegistrationFormProps> = ({
	formInfo,
	formValues,
	switcherText,
}) => {
	const { lang } = useAppSelector(state => state.languageSlice);
	const { modeSwitcher } = useAppSelector(state => state.clientCabSlice);
	const dispatch = useDispatch();

	const updateFormInfo = (
		e: React.ChangeEvent<HTMLInputElement>,
		param: string
	) => {
		e.preventDefault();
		const newData: { [key: string]: string } = {};

		Object.assign(newData, formValues);

		newData[param] = e.target.value;

		dispatch(updateInfo(newData));
	};

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const emptyForm: { [key: string]: string } = {};
		Object.keys(formValues).map(key => {
			emptyForm[key] = '';
		});

		const JSONFormData = JSON.stringify(formValues);

		dispatch(updateInfo(emptyForm));
	};

	const switchTheMode = (modeName: 'registration' | 'login') => {
		dispatch(switchMode([modeName]));
	};

	const textBlockCondition: boolean =
		formInfo.formConfiguration === 'master' ||
		(formInfo.formConfiguration === 'client' &&
			modeSwitcher === 'registration');

	return (
		<form
			onSubmit={e => submitForm(e)}
			action=""
			className="bg-white w-[575px] grid gris-cols-1 justify-items-center gap-10 rounded-[90px_2px_2px_2px] px-[75px] py-[75px] shadow-[0px_10px_50px_rgba(161,189,227,0.17)]"
		>
			{formInfo.formConfiguration === 'client' || switcherText ? (
				<div className="w-full flex items-center justify-center">
					<button
						onPointerUp={() => {
							switchTheMode('login');
						}}
						className={`cursor-pointer transition-all border-b-[1px] w-full ${
							modeSwitcher === 'login'
								? 'border-red-400 text-red-400'
								: 'border-[#DBE7FF]'
						}`}
					>
						<span
							className={`w-full h-full flex items-center justify-center  border-b-[1px] pb-[33px] text-[22px] leading-[130%]  font-bold ${
								modeSwitcher === 'login'
									? 'border-red-400 text-red-400'
									: 'border-white text-[#93A0B9]'
							}`}
						>
							{lang[0] === 'RU'
								? switcherText?.login.RU
								: switcherText?.login.EN}
						</span>
					</button>
					<button
						onPointerUp={() => {
							switchTheMode('registration');
						}}
						className={`cursor-pointer transition-all border-b-[1px] w-full ${
							modeSwitcher === 'registration'
								? 'border-red-400 text-red-400'
								: 'border-[#DBE7FF]'
						}`}
					>
						<span
							className={`w-full h-full flex items-center justify-center border-b-[1px] pb-[33px] text-[22px] leading-[130%] font-bold ${
								modeSwitcher === 'registration'
									? 'border-red-400 text-red-400'
									: 'border-white text-[#93A0B9]'
							}`}
						>
							{lang[0] === 'RU'
								? switcherText?.registration.RU
								: switcherText?.registration.EN}
						</span>
					</button>
				</div>
			) : (
				''
			)}

			<div className="w-[425px] grid grid-cols-1 gap-[30px]">
				{formInfo.inputsList.map(inputData => {
					const {
						id,
						type,
						theme,
						placeholderRU,
						placeholderEN,
						name,
					} = inputData;

					return (
						<Input
							key={id}
							type={type}
							theme={theme}
							placeholder={
								lang[0] === 'RU' ? placeholderRU : placeholderEN
							}
							name={name}
							value={formValues[name]}
							handler={(e: React.ChangeEvent<HTMLInputElement>) =>
								updateFormInfo(e, name)
							}
						/>
					);
				})}
			</div>

			<div className="w-full flex justify-center items-center">
				<span className=" mr-10">
					<CheckBox
						textContent={
							lang[0] === 'RU'
								? formInfo.checkboxText.RU.toUpperCase()
								: formInfo.checkboxText.EN.toUpperCase()
						}
						handler={(isChecked: boolean) => {
							console.log(isChecked);
						}}
					/>
				</span>

				<a
					className="text-red-400 select-none"
					href={formInfo.forgetPasswordText.link}
				>
					{lang[0] === 'RU'
						? formInfo.forgetPasswordText.RU.toUpperCase()
						: formInfo.forgetPasswordText.EN.toUpperCase()}
				</a>
			</div>

			{textBlockCondition ? (
				<p className="text-center">
					{lang[0] === 'RU'
						? formInfo.registrationInfo.beforeLinkText.RU
						: formInfo.registrationInfo.beforeLinkText.EN}{' '}
					<a
						href={formInfo.registrationInfo.link.link}
						className="transition-all cursor-pointer text-red-400 border-b-[1px] border-red-200 hover:border-red-400 pb-[2px]"
					>
						{lang[0] === 'RU'
							? formInfo.registrationInfo.link.RU
							: formInfo.registrationInfo.link.EN}{' '}
					</a>
					{lang[0] === 'RU'
						? formInfo.registrationInfo.afterLinkText.RU
						: formInfo.registrationInfo.afterLinkText.EN}
				</p>
			) : (
				''
			)}

			<div className="w-full h-[60px]">
				<Input
					type={'submit'}
					theme={'light'}
					placeholder={
						lang[0] === 'RU'
							? formInfo.submitText.RU.toUpperCase()
							: formInfo.submitText.EN.toUpperCase()
					}
					name={''}
				/>
			</div>
		</form>
	);
};

export default RegistrationForm;
