export type socialData = {
	link: string;
	icon: JSX.Element;
};

export type socialListType = {
	[key: string]: socialData;
};

export interface contactsType {
	tel: string;
	mail: string;
}

export type clientMasterIntType = {
	[key: string]: interactionDataType;
};

export interface interactionDataType {
	content: string;
	icon: JSX.Element;
	link: string;
}
