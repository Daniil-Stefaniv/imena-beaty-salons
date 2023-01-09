import React from 'react';
import HeaderFirstLine from './HeaderFirstLine/HeaderFirstLine';
import HeaderSecondLine from './HeaderSecondLIne/HeaderSecondLIne';

const Header = () => {
	return (
		<section className=" bg-slate-800 ">
			<HeaderFirstLine />
			<HeaderSecondLine />
		</section>
	);
};

export default Header;
