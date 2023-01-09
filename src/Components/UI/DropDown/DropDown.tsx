import React, { useState } from 'react';
import RandomKey from '../../../RandomKey/RandomKey';
import SelectIcon from '../../GraphicElements/commonIcons/SelectIcon';
import DropDownOption from './DropDownOption/DropDownOption';
import DropDownProps, { DropDownOpInfo } from './DropDownTypes';
import { optionType } from '../../../store/HeaderSlice/HeaderSliceTypes';
import { useAppSelector } from '../../../store/MainStore';

const DropDown = ({ dropDownName, opList, styles }: DropDownProps) => {
	const { lang } = useAppSelector(state => state.languageSlice);

	const [dropDownVisibility, setDropDownVisibility] =
		useState<boolean>(false);

	const dropDownOpen = () => {
		setDropDownVisibility(true);
	};

	const dropDownClose = () => {
		setDropDownVisibility(false);
	};

	return (
		<div className="relative">
			<div
				tabIndex={0}
				onPointerUp={dropDownOpen}
				onFocus={dropDownOpen}
				onBlur={dropDownClose}
				onPointerOver={dropDownOpen}
				onPointerLeave={dropDownClose}
				className={` cursor-default flex items-center ${styles.dropDownMain}`}
			>
				<span className="mr-2 pb-2">{dropDownName}</span>
				<span
					className={
						dropDownVisibility
							? 'transition-all rotate-180'
							: 'transition-all'
					}
				>
					<SelectIcon />
				</span>
			</div>
			<ul
				onPointerOver={dropDownOpen}
				onPointerLeave={dropDownClose}
				className={
					dropDownVisibility
						? `absolute top-full left-0 transition-all ${styles.opContainer}`
						: `absolute top-full transition-all opacity-0 -z-40 ${styles.opContainer}`
				}
			>
				{opList.map((el: optionType) => {
					return (
						<DropDownOption
							key={el.id}
							value={lang[0] === 'RU' ? el.nameRU : el.nameEN}
							link={el.link}
							style={`cursor-pointer ${styles.DropDownOption}`}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default DropDown;
