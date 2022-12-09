export default interface SelectProps {
	opLIst: string[];
	iconList?: { [key: string]: HTMLDivElement };
	styles: {
		allContainer?: string;
		mainField: string;
		opContainer: string;
		option: string;
	};
}
