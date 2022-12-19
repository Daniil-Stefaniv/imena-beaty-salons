import React, { useContext } from 'react';
import HeaderAndFooterData from '../../Data/Header&FooterData/Header&FooterData';
import languageContext from '../GlobalContext/GlobalContext';
import HeaderFirstLine from './HeaderFirstLine/HeaderFirstLine';
import HeaderSecondLine from './HeaderSecondLIne/HeaderSecondLIne';

const Header = () => {
	const { selectedLanguage } = useContext(languageContext);

	const {
		contactsList,
		socialList,
		clientMasterInteraction,
		navMenuItemsList,
	} = HeaderAndFooterData();

	return (
		<section className=" bg-slate-800 ">
			<HeaderFirstLine
				contactLinks={contactsList}
				socialList={socialList}
				clientMasterIntList={clientMasterInteraction}
			/>
			<HeaderSecondLine navMenuItems={navMenuItemsList} />
		</section>
	);
};

export default Header;
