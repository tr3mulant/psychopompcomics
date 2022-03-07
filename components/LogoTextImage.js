import Image from 'next/image';
import { useTheme } from 'styled-components';
import logo_light from '../images/psychopomp-comics-inv@4x.png';
import logo_dark from '../images/psychopomp-comics@4x.png';

export default function LogoTextImage() {
	const theme = useTheme();
	const logo = theme.mode == 'light' ? logo_light : logo_dark;
	return <Image width='604' height='136' src={logo} alt='Psychopomp Comics' />;
}
