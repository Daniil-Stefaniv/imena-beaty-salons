import React from 'react';

const ContextForSelect = React.createContext<{
	selectedValue: string;
	setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
	setVsisbilityState: React.Dispatch<React.SetStateAction<boolean>>;
}>({
	selectedValue: '',
	setSelectedValue: function (value: React.SetStateAction<string>): void {
		throw new Error('Function not implemented.');
	},
	setVsisbilityState: function (value: React.SetStateAction<boolean>): void {
		throw new Error('Function not implemented.');
	},
});

export default ContextForSelect;
