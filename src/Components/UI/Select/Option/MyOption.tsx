import React from 'react';
import MyOptionProps from './MyOptionTypes';

const MyOption = ({ value, icon, handler, style }: MyOptionProps) => {
	return (
		<li
			className={` select-none cursor-pointer w-full bg-inherit px-5 py-3 ${style}`}
			onPointerUp={handler}
		>
			{value}
		</li>
	);
};

export default MyOption;
