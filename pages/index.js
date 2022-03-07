import ComingSoon from '../components/styles/ComingSoon.styled';
import styled from 'styled-components';
import ComingSoonImage from '../components/ComingSoonImage';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import { Navbar_Style_1 } from '../components/Navbar';
import MotionHeader from '../components/styles/MotionHeader.styled';
import MotionMain from '../components/styles/MotionMain.styled';

const Title = styled.h1`
	text-align: center;
	color: var(--text1);
	margin: 0 0 3.2rem;
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
					<SignUp>Sign up to receive email updates</SignUp>
					<NewsletterSubscribe />
				</ComingSoon>
			</MotionMain>
		</>
	);
}
