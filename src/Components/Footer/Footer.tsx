import React from 'react';
import FooterFirstLine from './FooterFirstLine/FooterFirstLine';
import FooterSecondLine from './FooterSecondLine/FooterSecondLine';
import FooterThirdLine from './FooterThirdLine/FooterThirdLine';

const Footer = ({ size }: { size: 'big' | 'small' }) => {
	return size === 'big' ? (
		<div className=" bg-slate-800 px-[279px]">
			<FooterFirstLine />
			<FooterSecondLine size={'big'} />
			<FooterThirdLine />
		</div>
	) : (
		<div className=" bg-slate-800 px-[279px]">
			<FooterSecondLine size={size} />
			<FooterThirdLine />
		</div>
	);
};

export default Footer;
