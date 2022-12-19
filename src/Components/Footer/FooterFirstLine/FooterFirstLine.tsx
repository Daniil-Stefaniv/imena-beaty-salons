import React, { useContext, useState } from 'react';
import languageContext from '../../GlobalContext/GlobalContext';
import Input from '../../UI/Input/Input';
import { formUpdateInfoFunc } from './FooterFirstLineTypes';

const FooterFirstLine = () => {
	const emptyForm = {
		name: '',
		mail: '',
		text: '',
	};

	const [formData, setFormData] = useState<{ [key: string]: string }>(
		emptyForm
	);

	const { selectedLanguage } = useContext(languageContext);

	const updateFormInfo = (
		e: formUpdateInfoFunc,
		param: 'name' | 'mail' | 'text'
	) => {
		e.preventDefault();
		const changedFromData = {
			name: formData.name,
			mail: formData.mail,
			text: formData.text,
		};
		changedFromData[param] = e.currentTarget.value;
		setFormData(changedFromData);
	};

	const sendForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		const JSONFormData = JSON.stringify(formData);
		setFormData(emptyForm);
	};

	return (
		<div className=" border-b-2 border-gray-500  py-11 flex justify-between">
			<div className=" w-[30%] mr-[10%]">
				<span></span>
				<h2 className=" leading-[130%]  text-[46px] font-black text-white mb-[54px]">
					{selectedLanguage === 'RU'
						? 'Свяжитесь с нами'
						: 'Contact us'}
				</h2>
				<p className=" text-lg font-light text-white">
					{selectedLanguage === 'RU'
						? 'Мы будем рады проконсультировать вас по вопросам обслуживания или открытия студии в коворкинге.'
						: 'We will offer service based on interests or in a co-working space.'}
				</p>
			</div>
			<div className=" w-7/12">
				<form onSubmit={sendForm} action="">
					<div className="w-full mb-[53px] grid grid-cols-2 gap-8">
						<Input
							type={'text'}
							theme={'dark'}
							placeholder={
								selectedLanguage === 'RU'
									? 'Ваше имя *'
									: 'Your name *'
							}
							name={''}
							value={formData.name}
							handler={(e: formUpdateInfoFunc) =>
								updateFormInfo(e, 'name')
							}
						/>
						<Input
							type={'text'}
							theme={'dark'}
							placeholder={
								selectedLanguage === 'RU'
									? 'Ваш email *'
									: 'Your email *'
							}
							name={''}
							value={formData.mail}
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
							selectedLanguage === 'RU'
								? 'Напишите ваш вопрос здесь *'
								: 'Write your question here *'
						}
						value={formData.text}
						onChange={(e: formUpdateInfoFunc) =>
							updateFormInfo(e, 'text')
						}
					/>
					<div className="grid grid-cols-[1.2fr_0.8fr] grid-rows-[50px] gap-6">
						<span className=" text-xs text-white">
							{selectedLanguage === 'RU' ? (
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
								selectedLanguage === 'RU'
									? 'ПОДРОБНЕЕ'
									: 'LEARN MORE'
							}
							name={''}
						/>

						{/* <input
							className="cursor-pointer bg-red-400 px-[112px] text-white"
							type="submit"
							value="подробнее"
						/> */}
						<div></div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FooterFirstLine;
