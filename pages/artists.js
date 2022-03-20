import styled from 'styled-components';
import MotionFooter from '../components/Footer';
import MotionHeader from '../components/styles/MotionHeader.styled';
import MotionMain from '../components/styles/MotionMain.styled';
import { DevRoutes } from '../utils/dev_routes';

const Title = styled.h1`
	text-align: center;
	color: var(--text1);
	margin: 0 0 3.2rem;
`;

export default function Artists() {
	return (
		<>
			<MotionHeader>
				<Title>Artists</Title>
			</MotionHeader>
			<MotionMain />
			<MotionFooter />
		</>
	);
}

export const getServerSideProps = DevRoutes;
