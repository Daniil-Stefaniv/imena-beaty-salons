import React, { useContext } from 'react';
import DesignStudioLogo from '../../GraphicElements/Logo/DesignStudioLogo';
import languageContext from '../../GlobalContext/GlobalContext';

const FooterThirdLine = () => {
	const { selectedLanguage } = useContext(languageContext);

	return (
		<div className="flex items-center justify-between py-11">
			<p className=" text-gray-500 text-xs font-light ">
				{selectedLanguage === 'RU'
					? '© Imena Studios 2019 | Все права защищены'
					: '© Imena Studios 2019 | All rights reserved'}
			</p>

			<a
				className="transition-all text-gray-500 text-xs font-light underline underline-offset-1 hover:text-white"
				href=""
			>
				{selectedLanguage === 'RU'
					? 'Политика конфиденциальности'
					: 'Privacy policy'}
			</a>

			<DesignStudioLogo />
		</div>
	);
};

export default FooterThirdLine;
