import ComingSoon from '../components/styles/ComingSoon.styled'
import styled from 'styled-components'
import ComingSoonImage from '../components/ComingSoonImage';
import deer from '../images/deer.svg'; 
import NewsletterSubscribe from '../components/NewsletterSubscribe';

const Title = styled.h1`
	text-align: center;
  color: var(--text1);
	margin: 0 0 32px;
`
export default function Home() {
  return <ComingSoon>
		<Title>Coming Soon</Title>
		<ComingSoonImage />
		<h2>Sign up to receive email updates</h2>
		<NewsletterSubscribe />
	</ComingSoon>
}