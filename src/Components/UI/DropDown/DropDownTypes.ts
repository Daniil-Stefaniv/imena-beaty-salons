export default interface DropDownProps {
	dropDownName: string;
	opList: {
		[key: string]: DropDownOpInfo;
	};
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
