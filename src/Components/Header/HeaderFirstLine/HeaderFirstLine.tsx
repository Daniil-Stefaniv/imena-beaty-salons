import React, { useContext, useEffect, useState } from 'react';
import RandomKey from '../../../RandomKey/RandomKey';
import EnglishFlag from '../../GraphicElements/LanguagesIcons/EnglishFlag';
import RussianIcon from '../../GraphicElements/LanguagesIcons/RussianIcon';
import Select from '../../UI/Select/Select';
import HeaderFLProps from './HeaderFirstLineTypes';
import { useAppSelector } from '../../../store/MainStore';
import { useDispatch } from 'react-redux';
import {
	langType,
	switchTheLanguage,
} from '../../../store/LanguageSlice/LanguageSlice';
import AllIconsBase from '../../GraphicElements/allIconsBase';
import { Link, NavLink } from 'react-router-dom';

const HeaderFirstLine: React.FC = () => {
	const { lang, languagesList } = useAppSelector(
		store => store.languageSlice
	);

	const { socials, contacts, cabinetsAndAppointments } = useAppSelector(
		store => store.headerSlice
	);

	const dispatch = useDispatch();

	return (
		<div>
			<div className=" flex items-center pl-[54px] pr-[47px] py-2 bg-[rgba(0,0,0,.2)]">
				<div className="flex w-full">
					<div className=" border-r-2 border-[rgba(255,255,255,.2)] mr-14 pr-14">
						{contacts.map(contact => {
							console.log();

							return (
								<NavLink
									key={RandomKey()}
									className="transition-all border-b-2 border-transparent hover:border-[#ED6B6A] text-white mr-11 text-sm font-medium"
									to={contact.link}
								>
									{contact.value}
								</NavLink>
							);
						})}
					</div>

					<div className=" flex mr-auto">
						{socials.map((social, idx: number) => {
							return (
								<Link
									key={RandomKey()}
									className={
										idx < socials.length - 1
											? ' transition-all text-white border-b-2 border-transparent hover:border-[#ED6B6A]  mr-[50px]'
											: ' transition-all text-white border-b-2 border-transparent hover:border-[#ED6B6A] '
									}
									target="blank"
									to={social.link}
								>
									{AllIconsBase[social.icon]}
								</Link>
							);
						})}
					</div>
				</div>

				<div className="flex">
					<div className="flex border-r-2 border-[rgba(255,255,255,.2)] pr-11 mr-11">
						{cabinetsAndAppointments.map((el, idx: number) => {
							return (
								<Link
									key={RandomKey()}
									to={el.link}
									className={
										idx < cabinetsAndAppointments.length - 1
											? 'flex items-center transition-all text-white border-b-2 border-transparent hover:border-[#ED6B6A] mr-10'
											: 'flex items-center transition-all text-white border-b-2 border-transparent hover:border-[#ED6B6A]'
									}
								>
									{AllIconsBase[el.icon]}
									<span className=" whitespace-nowrap text-xs font-medium">
										{lang[0] === 'RU'
											? el.contentRU
											: el.contentEN}
									</span>
								</Link>
							);
						})}
					</div>
					<div className="">
						<Select
							iconList={{
								RU: <RussianIcon />,
								EN: <EnglishFlag />,
							}}
							handler={(newVal: langType) => {
								dispatch(
									switchTheLanguage({ newVal: [newVal] })
								);
							}}
							opLIst={languagesList}
							styles={{
								allContainer: '',
								mainField:
									'transition-all hover:bg-slate-600 text-white text-sm font-medium',
								opContainer:
									' pt-1 bg-slate-800 shadow-[0_5px_15px_5px_rgba(0,0,0,.3)]',
								option: 'hover:bg-slate-600 bg-inherit text-white text-sm font-medium',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderFirstLine;
