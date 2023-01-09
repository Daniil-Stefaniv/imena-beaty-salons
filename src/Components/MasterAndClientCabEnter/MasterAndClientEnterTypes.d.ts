import {
	formInfoType,
	fromValuesTypes,
	pageCommonInfoType,
} from '../../store/MasterCabSlice/MasterCabSliceTypes';
import { switcherTextType } from '../../store/ClientCabSlice/ClientCabSliceTypes';

export default interface MasterAndClientCabEnterProps {
	formInfoList: formInfoType;
	formValuesTemplate: fromValuesTypes;
	pageCommonInfo: pageCommonInfoType;
	switcherText?: switcherTextType;
}
