import { ReactElement } from 'react';
import langType from '../../../store/LanguageSlice/LanguageSlice';
export default interface SelectProps {
	opLIst: langType;
	iconList?: { [key: string]: ReactElement<HTMLDivElement> };
	handler: CallableFunction;
	styles: {
		allContainer?: string;
		mainField: string;
		opContainer: string;
		option: string;
	};
}
