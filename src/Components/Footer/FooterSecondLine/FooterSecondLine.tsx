import React, { useContext } from 'react';
import HeaderAndFooterData from '../../../Data/Header&FooterData/Header&FooterData';
import RandomKey from '../../../RandomKey/RandomKey';
import languageContext from '../../GlobalContext/GlobalContext';
import Logo from '../../GraphicElements/Logo/Logo';

const FooterSecondLine = ({ size }: { size: 'big' | 'small' }) => {
	const { selectedLanguage } = useContext(languageContext);

	const {
		contactsList,
		socialList,
		clientMasterInteraction,
		navMenuItemsList,
		aboutUsOpList,
	} = HeaderAndFooterData();

	const telMaskGenerator = (tel: string) => {
		return `+${tel[0]} (${tel[1]}${tel[2]}${tel[3]}) ${tel[4]}${tel[5]}${tel[6]}-${tel[7]}${tel[8]}-${tel[9]}${tel[10]}`;
	};

	return size === 'big' ? (
		<div className="flex py-11 border-b-2 border-gray-500 justify-between">
			<div className="flex flex-col">
				<a href="" className=" mb-14">
					<Logo />
				</a>

				{Object.entries(contactsList).map(
					(i: [string, { [key: string]: string }], idx: number) => {
						return i[0] === 'tel' ? (
							<a
								className={` w-fit transition-all text-sm font-bold text-white border-b-2 pb-1 border-transparent hover:border-red-400 ${
									idx ===
									Object.entries(contactsList).length - 1
										? 'mb-[38px]'
										: 'mb-[22px]'
								}`}
								key={RandomKey()}
								href={`tel:${Object.values(i[1]).join('')}`}
							>
								{telMaskGenerator(Object.values(i[1]).join(''))}
							</a>
						) : (
							<a
								className={` w-fit transition-all text-sm font-bold text-white border-b-2 pb-1 border-transparent hover:border-red-400 ${
									idx ===
									Object.entries(contactsList).length - 1
										? 'mb-[38px]'
										: 'mb-[22px]'
								}`}
								key={RandomKey()}
								href={`mailto:${Object.values(i[1]).join('')}`}
							>
								{Object.values(i[1]).join('')}
							</a>
						);
					}
				)}

				<div className="flex">
					{Object.values(socialList).map((social, idx: number) => {
						return (
							<a
								className={
									idx === Object.values(socialList).length - 1
										? 'transition-all text-white border-b-2 border-transparent hover:border-[#ED6B6A] pb-1'
										: 'transition-all text-white border-b-2 border-transparent hover:border-[#ED6B6A] pb-1  mr-[53px]'
								}
								key={RandomKey()}
								href={social.link}
							>
								{social.icon}
							</a>
						);
					})}
				</div>
			</div>

			<div className="">
				<ul className="flex flex-col justify-between h-full">
					{['Главная', ...navMenuItemsList].map(i => {
						return (
							<li
								key={RandomKey()}
								className="cursor-pointer transition-all w-fit text-white text-sm font-bold border-b-2 pb-1 border-transparent hover:border-red-400"
							>
								{i}
							</li>
						);
					})}
				</ul>
			</div>

			<div className="">
				<p className="text-white font-bold mb-[30px]">
					{selectedLanguage === 'RU' ? 'О нас' : 'About us'}
				</p>
				<ul className="pl-7 border-l-2 border-[rgba(255,255,255,0.3)] h-1/2 flex flex-col justify-between">
					{Object.values(aboutUsOpList).map(opInfo => {
						return (
							<li key={RandomKey()}>
								<a
									className="transition-all text-[#DCE7FD] text-xs font-semibold hover:text-red-400"
									href={opInfo.link}
								>
									{opInfo.content}
								</a>
							</li>
						);
					})}
				</ul>
			</div>

			<div className="">
				<ul className="">
					{Object.values(clientMasterInteraction).map(
						(item, idx: number) => {
							return (
								<li
									key={RandomKey()}
									className={
										idx ===
										Object.values(clientMasterInteraction)
											.length -
											1
											? ''
											: 'mb-[29px]'
									}
								>
									<a
										className="flex items-center cursor-pointer transition-all text-white text-sm font-bold border-b-2 pb-1 border-transparent hover:border-red-400"
										href={item.link}
									>
										{item.icon}
										{item.content}
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

			{Object.entries(contactsList).map(
				(i: [string, { [key: string]: string }], idx: number) => {
					return i[0] === 'tel' ? (
						<a
							className={` w-fit transition-all text-sm font-bold text-white border-b-2 pb-1 border-transparent hover:border-red-400 ${
								idx === Object.entries(contactsList).length - 1
									? 'mr-[91px]'
									: 'mr-[40px]'
							}`}
							key={RandomKey()}
							href={`tel:${Object.values(i[1]).join('')}`}
						>
							{telMaskGenerator(Object.values(i[1]).join(''))}
						</a>
					) : (
						<a
							className={` w-fit transition-all text-sm font-bold text-white border-b-2 pb-1 border-transparent hover:border-red-400 ${
								idx === Object.entries(contactsList).length - 1
									? 'mr-[91px]'
									: 'mr-[40px]'
							}`}
							key={RandomKey()}
							href={`mailto:${Object.values(i[1]).join('')}`}
						>
							{Object.values(i[1]).join('')}
						</a>
					);
				}
			)}

			<div className="flex">
				{Object.values(socialList).map((social, idx: number) => {
					return (
						<a
							className={
								idx === Object.values(socialList).length - 1
									? 'transition-all text-white border-b-2 border-transparent hover:border-[#ED6B6A] pb-1'
									: 'transition-all text-white border-b-2 border-transparent hover:border-[#ED6B6A] pb-1  mr-[55px]'
							}
							key={RandomKey()}
							href={social.link}
						>
							{social.icon}
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default FooterSecondLine;
