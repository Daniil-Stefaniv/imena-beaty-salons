import React, { useContext } from 'react';
import RandomKey from '../../../RandomKey/RandomKey';
import languageContext from '../../GlobalContext/GlobalContext';
import EnglishFlag from '../../GraphicElements/LanguagesIcons/EnglishFlag';
import RussianIcon from '../../GraphicElements/LanguagesIcons/RussianIcon';
import Select from '../../UI/Select/Select';
import { interactionDataType, socialData } from '../HeaderTypes';
import HeaderFLProps from './HeaderFirstLineTypes';

const HeaderFirstLine = ({
	contactLinks,
	socialList,
	clientMasterIntList,
}: HeaderFLProps) => {
	const { setSelectedLanguage } = useContext(languageContext);

	const socials: socialData[] = Object.values(socialList);

	const telMaskGenerator = (tel: string) => {
		return `+${tel[0]} (${tel[1]}${tel[2]}${tel[3]}) ${tel[4]}${tel[5]}${tel[6]}-${tel[7]}${tel[8]}-${tel[9]}${tel[10]}`;
	};

	const clientMasterIntData: interactionDataType[] =
		Object.values(clientMasterIntList);

	const languageSwitch = (newVal: string) => {
		setSelectedLanguage(newVal);
	};

	return (
		<div>
			<div className=" flex items-center pl-[54px] pr-[47px] py-2 bg-[rgba(0,0,0,.2)]">
				<div className="flex w-full">
					<div className=" border-r-2 border-[rgba(255,255,255,.2)] mr-14 pr-14">
						<a
							className="transition-all border-b-2 border-transparent hover:border-[#ED6B6A] text-white mr-11 text-sm font-medium"
							href={`tel:+${contactLinks.tel}`}
						>
							{telMaskGenerator(contactLinks.tel)}
						</a>
						<a
							className="transition-all border-b-2 border-transparent hover:border-[#ED6B6A] text-white text-sm font-medium"
							href={`mailto:${contactLinks.mail}`}
						>
							{contactLinks.mail}
						</a>
					</div>

					<div className=" flex mr-auto">
						{socials.map((social: socialData, idx: number) => {
							return (
								<a
									key={RandomKey()}
									className={
										idx < socials.length - 1
											? ' transition-all text-white border-b-2 border-transparent hover:border-[#ED6B6A]  mr-[50px]'
											: ' transition-all text-white border-b-2 border-transparent hover:border-[#ED6B6A] '
									}
									target="blank"
									href={social.link}
								>
									{social.icon}
								</a>
							);
						})}
					</div>
				</div>

				<div className="flex">
					<div className="flex border-r-2 border-[rgba(255,255,255,.2)] pr-11 mr-11">
						{clientMasterIntData.map(
							(el: interactionDataType, idx: number) => {
								return (
									<a
										key={RandomKey()}
										href={el.link}
										className={
											idx < clientMasterIntData.length - 1
												? 'flex items-center transition-all text-white border-b-2 border-transparent hover:border-[#ED6B6A] mr-10'
												: 'flex items-center transition-all text-white border-b-2 border-transparent hover:border-[#ED6B6A]'
										}
									>
										{el.icon}
										<span className=" whitespace-nowrap text-xs font-medium">
											{el.content}
										</span>
									</a>
								);
							}
						)}
					</div>
					<div className="">
						<Select
							iconList={{
								RU: <RussianIcon />,
								EN: <EnglishFlag />,
							}}
							handler={languageSwitch}
							opLIst={['RU', 'EN']}
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
