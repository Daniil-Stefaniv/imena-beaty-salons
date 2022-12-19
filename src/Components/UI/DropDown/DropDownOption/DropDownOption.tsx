import React from 'react';
import DropDownOptionProps from './DropDownOptionTypes';

const DropDownOption = ({ value, link, style }: DropDownOptionProps) => {
	return (
		<li className={`${style}`}>
			<a href={link}>{value}</a>
		</li>
	);
};

export default DropDownOption;
