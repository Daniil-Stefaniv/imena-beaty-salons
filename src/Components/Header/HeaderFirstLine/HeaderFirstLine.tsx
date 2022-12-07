import React, { ReactElement } from 'react';
import Facebook from '../../GraphicElements/SociaIcons/Facebook';
import Instagram from '../../GraphicElements/SociaIcons/Instagram';
import VK from '../../GraphicElements/SociaIcons/VK';
import YouTube from '../../GraphicElements/SociaIcons/YouTube';
import AppointmentIcon from '../../GraphicElements/UserMatserContactIcons/AppointmentIcon';
import MasterCabIcon from '../../GraphicElements/UserMatserContactIcons/MasterCabIcon';
import UserCabIcon from '../../GraphicElements/UserMatserContactIcons/UserCabIcon';
import HeaderFLProps, { PlaceType } from './HeaderFirstLineTypes';

const HeaderFirstLine = ({ contactLinks }: HeaderFLProps) => {
	const anchorGenerator = (
		placeType: PlaceType,
		content: string | ReactElement<HTMLDivElement>,
		supportingStyles?: string
	) => {
		if (placeType === 'contacts') {
			const contactsCommonStyle = 'text-white mr-11 text-sm font-medium';

			return (
				<a
					className={`${contactsCommonStyle} ${supportingStyles}`}
					href={`tel:+${contactLinks.tel}`}
				>
					{contactLinks.tel}
				</a>
			);
		}

		if (placeType === 'socials') {
			const socialsCommonStyle = 'text-white ';

			return (
				<a
					className={`${socialsCommonStyle} ${supportingStyles}`}
					target="blank"
					href={contactLinks.facebook}
				>
					{<Facebook />}
				</a>
			);
		}

		if (placeType === 'cabs') {
			const cabsCommonStyle = 'text-white mr-11 text-sm font-medium';

			return (
				<a
					className="text-white mr-11 text-sm font-medium"
					href={`tel:+${contactLinks.tel}`}
				>
					{contactLinks.tel}
				</a>
			);
		}
		// return (
		// 	<a
		// 		className="text-white mr-11 text-sm font-medium"
		// 		href={`tel:+${contactLinks.tel}`}
		// 	>
		// 		{contactLinks.tel}
		// 	</a>
		// );
	};

	return (
		<div>
			<div className=" flex items-center pl-[54px] pr-[47px] py-2 bg-[rgba(0,0,0,.2)]">
				<div className="flex w-full">
					<div className=" border-r-2 border-[rgba(255,255,255,.2)] mr-14 pr-14">
						<a
							className="text-white mr-11 text-sm font-medium"
							href={`tel:+${contactLinks.tel}`}
						>
							{contactLinks.tel}
						</a>
						<a
							className="text-white text-sm font-medium"
							href={`mailto:${contactLinks.mail}`}
						>
							{contactLinks.mail}
						</a>
					</div>

					<div className=" flex mr-auto">
						<a
							className="text-white mr-[50px]"
							target="blank"
							href={contactLinks.facebook}
						>
							{<Facebook />}
						</a>
						<a
							className="text-white mr-[50px]"
							target="blank"
							href={contactLinks.vk}
						>
							{<VK />}
						</a>
						<a
							className="text-white mr-[50px]"
							target="blank"
							href={contactLinks.instagram}
						>
							{<Instagram />}
						</a>
						<a
							className="text-white "
							target="blank"
							href={contactLinks.youtube}
						>
							{<YouTube />}
						</a>
					</div>
				</div>
				<div className="flex">
					<div className="flex border-r-2 border-[rgba(255,255,255,.2)] pr-11 mr-11">
						<a
							href=""
							className="flex items-center text-white mr-10"
						>
							{<UserCabIcon classes={'mr-[10px]'} />}
							<span className=" whitespace-nowrap text-xs font-medium">
								Кабинет клиента
							</span>
						</a>
						<a
							href=""
							className="flex items-center text-white mr-10"
						>
							{<MasterCabIcon classes={'mr-[10px]'} />}
							<span className="whitespace-nowrap text-xs font-medium">
								Кабинет мастера
							</span>
						</a>
						<a href="" className="flex items-center text-white">
							{<AppointmentIcon classes={'mr-[10px]'} />}
							<span className="whitespace-nowrap text-xs font-medium">
								Онлайн-запись
							</span>
						</a>
					</div>
					<div className="">
						<select name="" id="">
							<option className="">
								{/* <svg></svg> */}
								<span>Русский</span>
							</option>
							<option className="">
								{/* <svg></svg> */}
								<span>English</span>
							</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderFirstLine;
