import {
	formInfoType,
	fromValuesTypes,
} from '../../../store/MasterCabSlice/MasterCabSliceTypes';
import { switcherTextType } from '../../../store/ClientCabSlice/ClientCabSliceTypes';

export default interface RegistrationFormProps {
	formInfo: formInfoType;
	formValues: fromValuesTypes;
	switcherText: switcherTextType | undefined;
}
