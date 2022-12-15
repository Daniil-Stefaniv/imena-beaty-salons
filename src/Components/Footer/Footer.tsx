import React from 'react';
import FooterFirstLine from './FooterFirstLine/FooterFirstLine';
import FooterSecondLine from './FooterSecondLine/FooterSecondLine';

const Footer = () => {
	return (
		<div className=" bg-slate-800">
			<FooterFirstLine />
			<FooterSecondLine />
			<div></div>
		</div>
	);
};

export default Footer;
