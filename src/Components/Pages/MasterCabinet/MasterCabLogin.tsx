import React from 'react';
import { useAppSelector } from '../../../store/MainStore';
import MasterAndClientCabEnter from '../../MasterAndClientCabEnter/MasterAndClientCabEnter';

const MasterCabLogin: React.FC = () => {
	const { formInfo, formValues, masterCabEnterInfo } = useAppSelector(
		state => state.masterCabSlice
	);

	return (
		<MasterAndClientCabEnter
			formInfoList={formInfo}
			formValuesTemplate={formValues}
			pageCommonInfo={masterCabEnterInfo}
			switcherText={undefined}
		/>
	);
};

export default MasterCabLogin;
