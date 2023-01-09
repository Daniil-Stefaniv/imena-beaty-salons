import React from 'react';
import DesignStudioLogo from '../../GraphicElements/Logo/DesignStudioLogo';
import { useAppSelector } from '../../../store/MainStore';

const FooterThirdLine = () => {
	const { lang } = useAppSelector(state => state.languageSlice);

	const { privacyPolicy, copyRights } = useAppSelector(
		state => state.FooterSlice
	);

	return (
		<div className="flex items-center justify-between py-11">
			<p className=" text-gray-500 text-xs font-light ">
				{lang[0] === 'RU' ? copyRights.RU : copyRights.EN}
			</p>

			<a
				className="transition-all text-gray-500 text-xs font-light underline underline-offset-1 hover:text-white"
				href=""
			>
				{lang[0] === 'RU' ? privacyPolicy.RU : privacyPolicy.EN}
			</a>

			<DesignStudioLogo />
		</div>
	);
};

export default FooterThirdLine;
