import Image from 'next/image';
import styled, { useTheme } from 'styled-components';
import deer_light from '../images/final_wtype_inv_cropped@4x.png';
import deer_dark from '../images/final_wtype_transparent_cropped@4x.png';

const ImageContainer = styled.div`
	margin-bottom: ${(props) => props.theme.spaces.xxl};
	max-width: 42rem;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.xs}) {
		width: 85%;
	}
`;

export default function ComingSoonImage() {
	const theme = useTheme();
	const deer_image = theme.mode == 'light' ? deer_light : deer_dark;
	return (
		<>
			<ImageContainer>
				<Image src={deer_image} alt='Psychopomp Comics' />
			</ImageContainer>
		</>
	);
}
