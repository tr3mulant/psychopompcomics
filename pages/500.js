import styled from 'styled-components';
import portal from '../images/portal.svg';
import Image from 'next/image';
import { LinkPrimaryOutline } from '../components/styles/StyledButton.styled';

const FiveZeroZeroHeader = styled.header`
	text-align: center;
	max-width: 100%;
	padding: ${(props) => props.theme.spaces.xxl}
		${(props) => props.theme.spaces.lg} ${(props) => props.theme.spaces.xl};
`;

const Title = styled.h1`
	text-align: center;
	color: var(--text1);
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
`;

const FiveZeroZeroMain = styled.main`
	height: 100%;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	p {
		padding: ${(props) => props.theme.spaces.md};
	}
`;

const ImageContainer = styled.div`
	position: relative;
	max-width: 60rem;
	width: 100%;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
		max-width: 34rem;
	}
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
		max-width: 26rem;
	}
`;

export default function FiveZeroZero() {
	return (
		<>
			<FiveZeroZeroMain>
				<ImageContainer>
					<Title>404</Title>
					<Image src={portal} alt='404' />
				</ImageContainer>

				{/* <p>{`Wondering astray, looking for what can't be found`}</p> */}
				<p>{`Cupidatat non qui deserunt nostrud reprehenderit non aliquip cillum id ipsum magna adipisicing.`}</p>
				<LinkPrimaryOutline href='/'>
					<a>Voluptate labore in irure</a>
					{/* <a>Let us guide you back</a> */}
				</LinkPrimaryOutline>
			</FiveZeroZeroMain>
		</>
	);
}
