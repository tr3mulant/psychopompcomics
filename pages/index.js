import ComingSoon from '../components/styles/ComingSoon.styled'
import styled from 'styled-components'
import Image from 'next/image'
import deer from '../images/deer.svg'; 
import NewsletterSubscribe from '../components/NewsletterSubscribe';

const Title = styled.h1`
	text-align: center;
  color: ${ props=>props.theme.colors.primary };
`
export default function Home() {
  return <ComingSoon>
		<Title>Coming Soon</Title>
		<Image 
			src={deer}
			alt="Line art of a stag"
		/>
		<h2>Sign up to receive email updates</h2>
		<NewsletterSubscribe />
	</ComingSoon>
}