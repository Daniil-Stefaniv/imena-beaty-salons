import React from 'react';
import MasterAndClientCabEnter from '../../MasterAndClientCabEnter/MasterAndClientCabEnter';
import { useAppSelector } from '../../../store/MainStore';

const ClientCabLogin = () => {
	const {
		formInfoReg,
		formInfoSignin,
		formRegValues,
		formSigninValues,
		clinetCabEnterInfo,
		modeSwitcher,
		switcherText,
	} = useAppSelector(state => state.clientCabSlice);

	return (
		<MasterAndClientCabEnter
			formInfoList={
				modeSwitcher === 'registration' ? formInfoReg : formInfoSignin
			}
			formValuesTemplate={
				modeSwitcher === 'registration'
					? formRegValues
					: formSigninValues
			}
			pageCommonInfo={clinetCabEnterInfo}
			switcherText={switcherText}
		/>
	);
};

export default ClientCabLogin;
