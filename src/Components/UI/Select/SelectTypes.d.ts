import { ReactElement } from 'react';
export default interface SelectProps {
	opLIst: string[];
	iconList?: { [key: string]: ReactElement<HTMLDivElement> };
	handler: CallableFunction;
	styles: {
		allContainer?: string;
		mainField: string;
		opContainer: string;
		option: string;
	};
}
