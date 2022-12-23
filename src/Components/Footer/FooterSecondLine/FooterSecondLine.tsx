import React from 'react';
import RandomKey from '../../../RandomKey/RandomKey';
import Logo from '../../GraphicElements/Logo/Logo';
import { useAppSelector } from '../../../store/MainStore';
import AllIconsBase from '../../GraphicElements/allIconsBase';

const FooterSecondLine = ({ size }: { size: 'big' | 'small' }) => {
	const { lang } = useAppSelector(state => state.languageSlice);

	const {
		contacts,
		socials,
		cabinetsAndAppointments,
		navMenuList,
		dropDownMenu,
	} = useAppSelector(state => state.headerSlice);

	return size === 'big' ? (
		<div className="flex py-11 border-b-2 border-gray-500 justify-between">
			<div className="flex flex-col">
				<a href="" className=" mb-14">
					<Logo />
				</a>

				{contacts.map((contact, idx: number) => (
					<a
						className={` w-fit transition-all text-sm font-bold text-white border-b-2 pb-1 border-transparent hover:border-red-400 ${
							idx === contacts.length - 1
								? 'mb-[38px]'
								: 'mb-[22px]'
						}`}
						key={RandomKey()}
						href={contact.link}
					>
						{contact.value}
					</a>
				))}

				<div className="flex">
					{socials.map((social, idx: number) => {
						return (
							<a
								className={
									idx === socials.length - 1
										? 'transition-all text-white border-b-2 border-transparent hover:border-[#ED6B6A] pb-1'
										: 'transition-all text-white border-b-2 border-transparent hover:border-[#ED6B6A] pb-1  mr-[53px]'
								}
								key={RandomKey()}
								href={social.link}
							>
								{AllIconsBase[social.icon]}
							</a>
						);
					})}
				</div>
			</div>

			<div className="">
				<ul className="flex flex-col justify-between h-full">
					{navMenuList.map(menuItem => {
						return (
							<li
								key={RandomKey()}
								className="cursor-pointer transition-all w-fit text-white text-sm font-bold border-b-2 pb-1 border-transparent hover:border-red-400"
							>
								{lang[0] === 'RU'
									? menuItem.textValueRU
									: menuItem.textValueEN}
							</li>
						);
					})}
				</ul>
			</div>

			<div className="">
				<p className="text-white font-bold mb-[30px]">
					{lang[0] === 'RU'
						? dropDownMenu.nameRU
						: dropDownMenu.nameEN}
				</p>
				<ul className="pl-7 border-l-2 border-[rgba(255,255,255,0.3)] h-1/2 flex flex-col justify-between">
					{dropDownMenu.optionsList.map(opInfo => {
						return (
							<li key={RandomKey()}>
								<a
									className="transition-all text-[#DCE7FD] text-xs font-semibold hover:text-red-400"
									href={opInfo.link}
								>
									{lang[0] === 'RU'
										? opInfo.nameRU
										: opInfo.nameEN}
								</a>
							</li>
						);
					})}
				</ul>
			</div>

			<div className="">
				<ul className="">
					{cabinetsAndAppointments.map(
						(cabOrAppointment, idx: number) => {
							return (
								<li
									key={RandomKey()}
									className={
										idx ===
										cabinetsAndAppointments.length - 1
											? ''
											: 'mb-[29px]'
									}
								>
									<a
										className="flex items-center cursor-pointer transition-all text-white text-sm font-bold border-b-2 pb-1 border-transparent hover:border-red-400"
										href={cabOrAppointment.link}
									>
										{AllIconsBase[cabOrAppointment.icon]}
										{lang[0] === 'RU'
											? cabOrAppointment.contentRU
											: cabOrAppointment.contentEN}
									</a>
								</li>
							);
						}
					)}
				</ul>
			</div>
		</div>
	) : (
		<div className="flex py-11 border-b-2 border-gray-500 items-center justify-between">
			<a href="" className=" mr-auto">
				<Logo />
			</a>

			{contacts.map((contact, idx: number) => (
				<a
					className={` w-fit transition-all text-sm font-bold text-white border-b-2 pb-1 border-transparent hover:border-red-400 ${
						idx === contacts.length - 1 ? 'mr-[91px]' : 'mr-[40px]'
					}`}
					key={RandomKey()}
					href={contact.link}
				>
					{contact.value}
				</a>
			))}

			<div className="flex">
				{socials.map((social, idx: number) => {
					return (
						<a
							className={
								idx === socials.length - 1
									? 'transition-all text-white border-b-2 border-transparent hover:border-[#ED6B6A] pb-1'
									: 'transition-all text-white border-b-2 border-transparent hover:border-[#ED6B6A] pb-1  mr-[55px]'
							}
							key={RandomKey()}
							href={social.link}
						>
							{AllIconsBase[social.icon]}
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default FooterSecondLine;
