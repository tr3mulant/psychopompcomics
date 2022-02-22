import ComingSoon from '../components/styles/ComingSoon.styled';
import styled from 'styled-components';
import ComingSoonImage from '../components/ComingSoonImage';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import { Navbar_Style_1 } from '../components/Navbar';

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
			<ComingSoon>
				<Title>Coming Soon</Title>
				<ComingSoonImage />
				<SignUp>Sign up to receive email updates</SignUp>
				<NewsletterSubscribe />
			</ComingSoon>
		</>
	);
}
