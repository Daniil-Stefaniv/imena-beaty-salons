import React from 'react';

const EnglishFlag = () => {
	return (
		<div>
			<svg
				width="11"
				height="9"
				viewBox="0 0 11 9"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="11" height="9" fill="#001974" />
				<mask
					id="mask0_6405_12666"
					style="mask-type:alpha"
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="11"
					height="9"
				>
					<rect width="11" height="9" fill="#001974" />
				</mask>
				<g mask="url(#mask0_6405_12666)">
					<path d="M12 -2L-1 9" stroke="white" />
					<path d="M-1 -2L12 9" stroke="white" />
					<path d="M-1 0L12 11" stroke="white" />
					<path d="M12 0L-1 11" stroke="white" />
					<path d="M5 -1V10" stroke="white" />
					<path d="M6 -1V10" stroke="white" />
					<path d="M12 -1L-1 10" stroke="#FF0000" />
					<path d="M-1 -1L12 10" stroke="#FF0000" />
					<path d="M5.5 -1V10" stroke="#FF0000" />
				</g>
			</svg>
		</div>
	);
};

export default EnglishFlag;
