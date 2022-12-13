import React, { useState } from 'react';
import RandomKey from '../../../RandomKey/RandomKey';
import SelectIcon from '../../GraphicElements/commonIcons/SelectIcon';
import DropDownOption from './DropDownOption/DropDownOption';
import DropDownProps, { DropDownOpInfo } from './DropDownTypes';

const DropDown = ({ dropDownName, opList, styles }: DropDownProps) => {
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
				className={`flex items-center ${styles.dropDownMain}`}
			>
				<span className="mr-2">{dropDownName}</span>
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
						? `absolute top-full transition-all ${styles.opContainer}`
						: `absolute top-full transition-all opacity-0 -z-40 ${styles.opContainer}`
				}
			>
				{Object.values(opList).map((el: DropDownOpInfo) => {
					return (
						<DropDownOption
							key={RandomKey()}
							value={el.content}
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
