import Link from 'next/link';
import Image from 'next/image';
import styled, { useTheme } from 'styled-components';
import brand_light from '../images/final_inv_cropped.png';
import brand_dark from '../images/final_cropped_transparent.png';

const NavBrandContainer = styled.div`
	width: ${(props) => props.theme.spaces.xxxl};
	max-width: 100%;
	padding: ${(props) => props.theme.spaces.ms};
	margin: ${(props) => props.theme.spaces.lg} auto;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
		margin-left: auto;
	}
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
		margin-left: ${(props) => props.theme.spaces.md};
		width: 6.72rem;
	}
`;

export const NavBrand = ({ onClick }) => {
	const theme = useTheme();
	const brand_image = theme.mode == 'light' ? brand_light : brand_dark;
	return (
		<>
			<NavBrandContainer>
				<Link href='/'>
					<a onClick={onClick}>
						<Image src={brand_image} alt='Psychopomp Comics Brand Image' />
					</a>
				</Link>
			</NavBrandContainer>
		</>
	);
};
