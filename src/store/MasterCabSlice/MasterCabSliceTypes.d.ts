export default interface initialStateTypes {
	formInfo: formInfoType;
	formValues: fromValuesTypes;
	masterCabEnterInfo: pageCommonInfoType;
}

interface formInfoType {
	formConfiguration: 'client' | 'master';
	inputsList: inputInfoType[];
	submitText: multiLangType;
	checkboxText: multiLangType;
	forgetPasswordText: linkTextType;
	registrationInfo: registrationInfoType;
}

interface multiLangType {
	RU: string;
	EN: string;
}

interface linkTextType {
	RU: string;
	EN: string;
	link: string;
}

interface inputInfoType {
	id: number;
	type: 'text' | 'submit';
	theme: 'dark' | 'light';
	placeholderRU: string;
	placeholderEN: string;
	name: string;
}

interface fromValuesTypes {
	[tel: string]: string;
	[mail: string]: string;
}

interface registrationInfoType {
	beforeLinkText: multiLangType;
	link: linkTextType;
	afterLinkText: multiLangType;
}

interface pageCommonInfoType {
	naviagtion: {
		previousPage: linkTextType;
		currentPage: linkTextType;
	};

	mainTitle: multiLangType;
}

export {
	multiLangType,
	linkTextType,
	pageCommonInfoType,
	formInfoType,
	inputInfoType,
	fromValuesTypes,
};
