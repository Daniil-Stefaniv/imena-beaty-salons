import React, { useContext } from 'react';
import MyOptionProps from './MyOptionTypes';
import ContextForSelect from '../Context/SelectContext';

const MyOption = ({ value, Icon, style }: MyOptionProps) => {
	const { setSelectedValue, setVsisbilityState } =
		useContext(ContextForSelect);
	const selectOp = () => {
		setSelectedValue(value);
		setVsisbilityState(false);
	};

	return (
		<li>
			<div
				className={`flex items-center  select-none cursor-pointer w-full bg-inherit px-5 pt-2 last:pb-2 ${style}`}
				onPointerUp={selectOp}
			>
				{Icon}
				{value}
			</div>
		</li>
	);
};

export default MyOption;
