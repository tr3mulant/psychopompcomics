import styled from 'styled-components';
import MotionHeader from '../components/styles/MotionHeader.styled';
import MotionMain from '../components/styles/MotionMain.styled';
import StyledFooter from '../components/styles/StyledFooter.styled';
import { DevRoutes } from '../utils/dev_routes';

const Title = styled.h1`
	text-align: center;
	color: var(--text1);
	margin: 0 0 3.2rem;
`;

export default function Characters() {
	return (
		<>
			<MotionHeader>
				<Title>Characters</Title>
			</MotionHeader>
			<MotionMain />
			<StyledFooter />
		</>
	);
}

export const getServerSideProps = DevRoutes;
