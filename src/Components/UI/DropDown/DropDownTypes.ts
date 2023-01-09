import { optionType } from '../../../store/HeaderSlice/HeaderSliceTypes';

export default interface DropDownProps {
	dropDownName: string;
	opList: optionType[];
	styles: DropDownStyles;
}

export interface DropDownOpInfo {
	link: string;
	content: string;
}

export interface DropDownStyles {
	dropDownMain: string;
	opContainer: string;
	DropDownOption: string;
}
