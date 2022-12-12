/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-extra-semi */
import type { socialListType } from '..HeaderTypes/';
import type { clientMasterIntType } from '../HeaderTypes';
export default interface HeaderFLProps {
	contactLinks: {
		tel: string;
		mail: string;
	};
	socialList: socialListType;
	clientMasterIntList: clientMasterIntType;
}

export type PlaceType = 'contacts' | 'socials' | 'cabs';
