import EnglishFlag from './LanguagesIcons/EnglishFlag';
import RussianIcon from './LanguagesIcons/RussianIcon';
import Facebook from './SociaIcons/Facebook';
import Instagram from './SociaIcons/Instagram';
import VK from './SociaIcons/VK';
import YouTube from './SociaIcons/YouTube';
import AppointmentIcon from './UserMatserContactIcons/AppointmentIcon';
import MasterCabIcon from './UserMatserContactIcons/MasterCabIcon';
import UserCabIcon from './UserMatserContactIcons/UserCabIcon';
import Check from './commonIcons/Check';
import SelectIcon from './commonIcons/SelectIcon';

type IconsBaseType = {
	[key: string]: JSX.Element;
};

const IconsBase: IconsBaseType = {
	InstagramIcon: Instagram(),
	FacebookIcon: Facebook(),
	VKIcon: VK(),
	YouTubeIcon: YouTube(),
	ClinetCabIcon: UserCabIcon({ classes: 'mr-[10px]' }),
	MasterCabIcon: MasterCabIcon({ classes: 'mr-[10px]' }),
	AppointmentIcon: AppointmentIcon({ classes: 'mr-[10px]' }),
	CheckIcon: Check(),
	SelectIcon: SelectIcon(),
	EnglishFlag: EnglishFlag(),
	RussianFlag: RussianIcon(),
};

export default IconsBase;
