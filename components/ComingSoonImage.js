import styled, { useTheme } from 'styled-components';
import MotionLogo from './styles/MotionLogo.styled';

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
	return (
		<>
			<ImageContainer>
				<MotionLogo alt='Psychopomp Comics' />
			</ImageContainer>
		</>
	);
}
