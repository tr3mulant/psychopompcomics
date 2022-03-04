import ComingSoon from '../components/styles/ComingSoon.styled';
import styled from 'styled-components';
import ComingSoonImage from '../components/ComingSoonImage';
import NewsletterSubscribe from '../components/NewsletterSubscribe';

const HomeHeader = styled.header`
	text-align: center;
	max-width: 100%;
	padding: ${(props) => props.theme.spaces.xxl} ${(props) => props.theme.spaces.lg} ${(props) => props.theme.spaces.xl};
`;

const Title = styled.h1`
	color: var(--text1);
`;

const HomeMain = styled.main`
	height: 100%;
	max-width: 100%;
	display: flex;
	flex-direction: column;
`;

const SignUp = styled.h2`
	margin: 2.4rem auto;
`;

export default function Home() {
	return (
		<>
			<HomeHeader>
				<Title>Coming Soon</Title>
			</HomeHeader>
			<HomeMain>
					<ComingSoon>
						<ComingSoonImage />
						<SignUp>Sign up to receive email updates</SignUp>
						<NewsletterSubscribe />
					</ComingSoon>
			</HomeMain>
		</>
	);
}
