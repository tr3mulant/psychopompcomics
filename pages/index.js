import ComingSoon from '../components/styles/ComingSoon.styled';
import styled from 'styled-components';
import ComingSoonImage from '../components/ComingSoonImage';
import MotionHeader from '../components/styles/MotionHeader.styled';
import MotionMain from '../components/styles/MotionMain.styled';
import MotionFooter from '../components/Footer';

const Title = styled.h1`
	color: var(--text1);
`;

const SignUp = styled.h2`
	margin: 2.4rem auto;
`;

export default function Home() {
	return (
		<>
			<MotionHeader>
				<Title>Coming Soon</Title>
			</MotionHeader>
			<MotionMain>
				<ComingSoon>
					<ComingSoonImage />
					{/* <SignUp>Sign up to receive email updates</SignUp>
					<NewsletterSubscribe /> */}
				</ComingSoon>
			</MotionMain>
			<MotionFooter />
		</>
	);
}
