import Image from 'next/image';
import styled from 'styled-components';
import logo_light from '../images/psychopomp-comics-inv@4x.png';
import logo_dark from '../images/psychopomp-comics@4x.png';

const ImageContainerLight = styled.div`
	@media (prefers-color-scheme: dark) {
		display: none;
	}
`;

const ImageContainerDark = styled(ImageContainerLight)`
	display: none;
	@media (prefers-color-scheme: dark) {
		display: block;
	}
`;

export default function LogoTextImage() {
	return (
		<>
			<ImageContainerLight>
				<Image
					width='604'
					height='136'
					src={logo_light}
					alt='Psychopomp Comics'
				/>
			</ImageContainerLight>
			<ImageContainerDark>
				<Image
					width='604'
					height='136'
					src={logo_dark}
					alt='Psychopomp Comics'
				/>
			</ImageContainerDark>
		</>
	);
}
