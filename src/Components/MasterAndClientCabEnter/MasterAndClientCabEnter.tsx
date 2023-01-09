import React from 'react';
import RegistrationForm from '../../Components/UI/RegistrationForm/RegistrationForm';
import BackGround from '../GraphicElements/Images/SigninOrSignupBG.png';
import circle from '../GraphicElements/Images/circle.png';
import fern from '../GraphicElements/Images/fern.png';
import Monstera from '../GraphicElements/Images/Monstera.png';
import scissors from '../GraphicElements/Images/scissors.png';
import spreadBottle from '../GraphicElements/Images/spreadBottle.png';
import bluredElement from '../GraphicElements/Images/bluredElement.png';
import { useAppSelector } from '../../store/MainStore';
import MasterAndClientCabEnterProps from './MasterAndClientEnterTypes';

const MasterAndClientCabEnter: React.FC<MasterAndClientCabEnterProps> = ({
	formInfoList,
	formValuesTemplate,
	pageCommonInfo,
	switcherText,
}) => {
	const { lang } = useAppSelector(state => state.languageSlice);

	return (
		<div className=" w-full h-full overflow-visible relative pt-[96px] pb-[259px] flex flex-col items-center">
			<div className="absolute w-full h-full top-0 left-0 bg-[#F6FAFF] -z-50"></div>
			<img
				className="select-none absolute top-[0px] w-full h-full -left-0 -z-30"
				src={BackGround}
			/>
			<img
				className="select-none absolute top-[60%] left-[67%] -z-40"
				src={circle}
			/>
			<img
				className="select-none absolute top-[47%] left-[-11%] -z-40"
				src={fern}
			/>
			<img
				className="select-none absolute top-[50%] left-[91%] -z-40"
				src={Monstera}
			/>
			<img
				className="select-none absolute top-[-21%] left-[78%] -z-40"
				src={scissors}
			/>
			<img
				className="select-none absolute top-[45%] left-[13%] -z-40"
				src={spreadBottle}
			/>
			<img
				className="select-none absolute top-[0%] left-[10%] -z-40"
				src={bluredElement}
			/>

			<div className=" mb-4 w-1/5	 flex justify-between">
				<a
					className="transition-all text-slate-800 hover:text-red-400"
					href={pageCommonInfo.naviagtion.previousPage.link}
				>
					{lang[0] === 'RU'
						? pageCommonInfo.naviagtion.previousPage.RU
						: pageCommonInfo.naviagtion.previousPage.EN}
				</a>
				<span className=" text-gray-400">/</span>
				<a
					className="transition-all text-slate-800 hover:text-red-400"
					href={''}
				>
					{lang[0] === 'RU'
						? pageCommonInfo.naviagtion.currentPage.RU
						: pageCommonInfo.naviagtion.currentPage.EN}
				</a>
			</div>

			<h1 className="mb-20 font-bold text-[56px] text-slate-800 whitespace-nowrap">
				{lang[0] === 'RU'
					? pageCommonInfo.mainTitle.RU
					: pageCommonInfo.mainTitle.EN}
			</h1>

			<RegistrationForm
				formInfo={formInfoList}
				formValues={formValuesTemplate}
				switcherText={switcherText}
			/>
		</div>
	);
};

export default MasterAndClientCabEnter;
