import React, { useContext, useState } from 'react';
import languageContext from '../../GlobalContext/GlobalContext';
import Input from '../../UI/Input/Input';
import { formUpdateInfoFunc } from './FooterFirstLineTypes';
import { useAppSelector } from '../../../store/MainStore';
import { useDispatch } from 'react-redux';
import { updateFormData } from '../../../store/FooterSlice.ts/FooterSlice';

const FooterFirstLine = () => {
	const dispatch = useDispatch();

	const { lang } = useAppSelector(state => state.languageSlice);

	const {
		footerFormValues,
		footerMainTitle,
		footerMainDesc,
		footerPlaceholders,
	} = useAppSelector(state => state.FooterSlice);

	const { selectedLanguage } = useContext(languageContext);

	const updateFormInfo = (
		e: formUpdateInfoFunc,
		param: 'name' | 'mail' | 'text'
	) => {
		e.preventDefault();

		const changedFromData = {
			name: footerFormValues.name,
			mail: footerFormValues.mail,
			text: footerFormValues.text,
		};
		changedFromData[param] = e.currentTarget.value;

		dispatch(updateFormData(changedFromData));
	};

	const sendForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();

		const emptyForm = {
			name: '',
			mail: '',
			text: '',
		};

		const JSONFormData = JSON.stringify(footerFormValues);
		console.log(JSONFormData);

		dispatch(updateFormData(emptyForm));
	};

	return (
		<div className=" border-b-2 border-gray-500  py-11 flex justify-between">
			<div className=" w-[30%] mr-[10%]">
				<span></span>
				<h2 className=" leading-[130%]  text-[46px] font-black text-white mb-[54px]">
					{lang[0] === 'RU' ? footerMainTitle.RU : footerMainTitle.EN}
				</h2>
				<p className=" text-lg font-light text-white">
					{lang[0] === 'RU' ? footerMainDesc.RU : footerMainDesc.EN}
				</p>
			</div>
			<div className=" w-7/12">
				<form onSubmit={sendForm} action="">
					<div className="w-full mb-[53px] grid grid-cols-2 gap-8">
						<Input
							type={'text'}
							theme={'dark'}
							placeholder={
								lang[0] === 'RU'
									? footerPlaceholders.name.RU
									: footerPlaceholders.name.EN
							}
							name={''}
							value={footerFormValues.name}
							handler={(e: formUpdateInfoFunc) =>
								updateFormInfo(e, 'name')
							}
						/>
						<Input
							type={'text'}
							theme={'dark'}
							placeholder={
								lang[0] === 'RU'
									? footerPlaceholders.mail.RU
									: footerPlaceholders.mail.EN
							}
							name={''}
							value={footerFormValues.mail}
							handler={(e: formUpdateInfoFunc) =>
								updateFormInfo(e, 'mail')
							}
						/>
					</div>
					<textarea
						className="mb-[43px] w-full resize-none overflow-hidden outline-none transition-all focus-visible:border-red-400 bg-inherit border-b-2 pb-2 placeholder:text-white text-white"
						name="Question"
						id=""
						placeholder={
							lang[0] === 'RU'
								? footerPlaceholders.text.RU
								: footerPlaceholders.text.EN
						}
						value={footerFormValues.text}
						onChange={(e: formUpdateInfoFunc) =>
							updateFormInfo(e, 'text')
						}
					/>
					<div className="grid grid-cols-[1.2fr_0.8fr] grid-rows-[50px] gap-6">
						<span className=" text-xs text-white">
							{lang[0] === 'RU' ? (
								<>
									Нажимая на кнопку, вы даете{' '}
									<a
										href=""
										className="text-red-400 underline hover:text-red-500"
									>
										согласие
									</a>{' '}
									на обработку персональных данных и
									соглашаетесь с политикой конфиденциальности.
								</>
							) : (
								<>
									By pressing the button, you give{' '}
									<a
										href=""
										className="text-red-400 underline hover:text-red-500"
									>
										agree
									</a>{' '}
									to the processing of personal data and agree
									to the privacy policy.
								</>
							)}
						</span>

						<Input
							type={'submit'}
							theme={'dark'}
							placeholder={
								lang[0] === 'RU'
									? footerPlaceholders.submit.RU
									: footerPlaceholders.submit.EN
							}
							name={''}
						/>
						<div></div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FooterFirstLine;
