import styled from 'styled-components';
import Image from 'next/image';
import portal from '../images/portal.svg';

const Title = styled.h1`
	text-align: center;
	color: var(--text1);
	margin: 0 0 3.2rem;
`;

const ImageContainer = styled.div``;

export default function FiveZeroZero() {
	return (
		<>
			<Title>500</Title>
			<ImageContainer>
				<Image src={portal} alt='500' />
			</ImageContainer>
		</>
	);
}
