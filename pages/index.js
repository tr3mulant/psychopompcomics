import ComingSoon from '../components/styles/ComingSoon.styled';
import styled from 'styled-components'

const Title = styled.h1`
	text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <ComingSoon><Title>Coming Soon</Title></ComingSoon>
}