import styled from 'styled-components';
import portal from '../images/portal.svg';
import Image from 'next/image';
import { LinkPrimaryOutline } from '../components/styles/StyledButton.styled';

const FourZeroFourHeader = styled.header`
	text-align: center;
	max-width: 100%;
	padding: ${(props) => props.theme.spaces.xxl}
		${(props) => props.theme.spaces.lg} ${(props) => props.theme.spaces.xl};
`;

const Title = styled.h1`
	text-align: center;
	color: var(--text1);
	position: relative;
	top: 50%;
	z-index: 10;
`;

const FourZeroFourMain = styled.main`
	height: 100%;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	text-align: center;
	p {
		padding: ${(props) => props.theme.spaces.md};
	}
`;

const ImageContainer = styled.div``;

export default function FourZeroFour() {
	return (
		<>
			<FourZeroFourMain>
				<ImageContainer>
					<Title>404</Title>
					<Image src={portal} alt='500' />
				</ImageContainer>
				<p>{`Wondering astray, looking for what can't be found`}</p>
				<LinkPrimaryOutline href='/'>
					<a>Let us guide you back</a>
				</LinkPrimaryOutline>
			</FourZeroFourMain>
		</>
	);
}
