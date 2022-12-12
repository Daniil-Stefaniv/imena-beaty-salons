import React from 'react';

const languageContext = React.createContext<{
	selectedLanguage: string;
	setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
}>({
	selectedLanguage: '',
	setSelectedLanguage: function (value: React.SetStateAction<string>): void {
		throw new Error('Function not implemented.');
	},
});

export default languageContext;
