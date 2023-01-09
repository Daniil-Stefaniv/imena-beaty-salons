export default interface FooterState {
	footerMainTitle: multiLangText;
	footerFormValues: FooterFormData;
	footerFormPlaceholders: FooterPlaceholdersTypes;
	footerMainDesc: MultiLangText;
	copyRights: MultiLangText;
	privacyPolicy: MultiLangText;
	formNotice: formNoticeTypes;
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

interface formNoticeTypes {
	textBeforeLink: string;
	textForLink: string;
	textAfterLink: string;
}
