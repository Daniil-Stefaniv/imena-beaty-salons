import { ChangeEventHandler, SyntheticEvent } from 'react';
export default interface InputProps {
	type: string;
	prioritet?: true;
	theme: 'light' | 'dark';
	placeholder: string;
	name: string;
	value?: string;
	handler?: ChangeEventHandler<HTMLInputElement>;
}
