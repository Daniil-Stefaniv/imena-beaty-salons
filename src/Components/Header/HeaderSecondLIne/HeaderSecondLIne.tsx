import React, { useContext } from 'react';
import RandomKey from '../../../RandomKey/RandomKey';
import languageContext from '../../GlobalContext/GlobalContext';
import Logo from '../../GraphicElements/Logo/Logo';
import DropDown from '../../UI/DropDown/DropDown';
import HeaderSecondLineProps from './HeaderSecondLIneTypes';

const HeaderSecondLine = ({ navMenuItems }: HeaderSecondLineProps) => {
	const { selectedLanguage } = useContext(languageContext);

	const opList = {
		one: {
			link: '#',
			content: selectedLanguage === 'RU' ? 'Один' : 'One',
		},
		two: {
			link: '#',
			content: selectedLanguage === 'RU' ? 'Два' : 'Two',
		},
		three: {
			link: '#',
			content: selectedLanguage === 'RU' ? 'Три' : 'Three',
		},
		four: {
			link: '#',
			content: selectedLanguage === 'RU' ? 'Четыре' : 'Four',
		},
	};

	return (
		<div className="flex items-center justify-between pl-[54px] pr-[47px] pt-[17px] pb-5">
			<a className="" href="#">
				<Logo />
			</a>

			<nav className="">
				<ul className="flex">
					<li className="mr-[84px]">
						<DropDown
							dropDownName={
								selectedLanguage === 'RU' ? 'О нас' : 'About us'
							}
							opList={opList}
							styles={{
								dropDownMain: ' text-white font-bold',
								opContainer:
									'py-3 bg-slate-800 shadow-[0_5px_15px_5px_rgba(0,0,0,.3)]',
								DropDownOption:
									'transition-all pl-6 pr-12 py-4 text-white hover:bg-slate-400',
							}}
						/>
					</li>

					{navMenuItems.map((item: string, idx: number) => {
						return (
							<li key={RandomKey()}>
								<a
									className={
										idx === navMenuItems.length - 1
											? 'pb-2  transition-all border-b-2 border-transparent hover:border-[#ED6B6A] text-sm font-bold text-white'
											: 'pb-2  transition-all border-b-2 border-transparent hover:border-[#ED6B6A] text-sm font-bold text-white mr-[84px]'
									}
									href=""
								>
									{item}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>

			<div>
				<button className="pr-3 py-3 flex items-center text-sm font-bold text-white hover:bg-slate-600 transition-all rounded-[5px]">
					<div className=" bg-[#ED6B6A] h-px w-[50px] mr-[30px]"></div>
					{selectedLanguage === 'RU'
						? 'Найти мастера или коворкинг'
						: 'Find a craftsman or co-working'}
				</button>
			</div>
		</div>
	);
};

export default HeaderSecondLine;
