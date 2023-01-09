import React from 'react';
import RandomKey from '../../../RandomKey/RandomKey';
import Logo from '../../GraphicElements/Logo/Logo';
import DropDown from '../../UI/DropDown/DropDown';
import { useAppSelector } from '../../../store/MainStore';

const HeaderSecondLine = () => {
	const { lang } = useAppSelector(state => state.languageSlice);

	const { navMenuList, dropDownMenu, searchBtnText } = useAppSelector(
		state => state.headerSlice
	);

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
								lang[0] === 'RU'
									? dropDownMenu.nameRU
									: dropDownMenu.nameEN
							}
							opList={dropDownMenu.optionsList}
							styles={{
								dropDownMain: ' text-white font-bold',
								opContainer:
									'py-3 bg-slate-800 shadow-[0_5px_15px_5px_rgba(0,0,0,.3)]',
								DropDownOption:
									'transition-all pl-6 pr-12 py-4 text-white hover:bg-slate-400',
							}}
						/>
					</li>

					{navMenuList.map((navMenuItem, idx: number) => {
						return (
							<li key={RandomKey()}>
								<a
									className={
										idx === navMenuList.length - 1
											? 'pb-2  transition-all border-b-2 border-transparent hover:border-[#ED6B6A] text-sm font-bold text-white'
											: 'pb-2  transition-all border-b-2 border-transparent hover:border-[#ED6B6A] text-sm font-bold text-white mr-[84px]'
									}
									href={navMenuItem.link}
								>
									{lang[0] === 'RU'
										? navMenuItem.textValueRU
										: navMenuItem.textValueEN}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>

			<div>
				<button className="pr-3 py-3 flex items-center text-sm font-bold text-white hover:bg-slate-600 transition-all rounded-[5px]">
					<div className=" bg-[#ED6B6A] h-px w-[50px] mr-[30px]"></div>
					{lang[0] === 'RU' ? searchBtnText.RU : searchBtnText.EN}
				</button>
			</div>
		</div>
	);
};

export default HeaderSecondLine;
