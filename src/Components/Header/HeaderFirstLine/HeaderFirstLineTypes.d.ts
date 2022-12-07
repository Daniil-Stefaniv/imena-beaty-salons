/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-extra-semi */
export default interface HeaderFLProps {
	contactLinks: {
		tel: string;
		mail: string;
		instagram: string;
		facebook: string;
		vk: string;
		youtube: string;
	};
}

export type PlaceType = 'contacts' | 'socials' | 'cabs';
