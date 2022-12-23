export default interface FooterState {
	footerMainTitle: multiLangText;
	footerFormValues: FooterFormData;
	footerPlaceholders: FooterPlaceholdersTypes;
	footerMainDesc: MultiLangText;
	copyRights: MultiLangText;
	confidencePolicy: MultiLangText;
}

export interface FooterFormData {
	name: string;
	mail: string;
	text: string;
}

interface MultiLangText {
	RU: string;
	EN: string;
}

interface FooterPlaceholdersTypes {
	name: MultiLangText;
	mail: MultiLangText;
	text: MultiLangText;
	submit: MultiLangText;
}
