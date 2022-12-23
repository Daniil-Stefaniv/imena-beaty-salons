export default interface InitialStateType {
	contacts: ContactsType;
	socials: Socials;
	cabinetsAndAppointments: CabsAndAppointmentsType;
	navMenuList: navMEnuListType;
	dropDownMenu: dropDownMenuType;
	searchBtnText: searchBtnTextType;
}

type ContactsType = Contact[];

interface Contact {
	value: string;
	link: string;
}

interface SoicalEl {
	link: string;
	icon: string;
}
type Socials = SoicalEl[];

type CabsAndAppointmentsType = CabsAndAppointments[];

interface CabsAndAppointments {
	contentRU: string;
	contentEN: string;
	icon: string;
	link: string;
}

type navMEnuListType = navMenuItem[];

interface navMenuItem {
	textValueRU: string;
	textValueEN: string;
	link: string;
}

interface dropDownMenuType {
	nameRU: string;
	nameEN: string;
	optionsList: optionType[];
}

interface optionType {
	id: string;
	nameRU: string;
	nameEN: string;
	link: string;
}

interface searchBtnTextType {
	RU: string;
	EN: string;
}
