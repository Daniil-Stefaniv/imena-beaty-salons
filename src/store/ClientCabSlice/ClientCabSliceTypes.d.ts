import {
	formInfoType,
	pageCommonInfoType,
	multiLangType,
} from '../MasterCabSlice/MasterCabSliceTypes';

export default interface ClientCabInitialState {
	formInfoReg: formInfoType;
	formInfoSignin: formInfoType;
	clinetCabEnterInfo: pageCommonInfoType;
	formRegValues: formValuesType;
	formSigninValues: formValuesType;
	switcherText: switcherTextType;
	modeSwitcher: 'registration' | 'login';
}

type switcherTextType = {
	login: multiLangType;
	registration: multiLangType;
};
