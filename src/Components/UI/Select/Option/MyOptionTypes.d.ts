import { ReactElement } from 'react';

export default interface MyOptionProps {
	value: string;
	icon?: HTMLDivElement<SVGElement>;
	handler: React.PointerEventHandler<HTMLLIElement>;
	style: string;
}
