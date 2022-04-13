import styled from 'styled-components';
import MotionHeader from './MotionHeader.styled';
import LogoTextImage from '../LogoTextImage';

const AboutHeader = styled(MotionHeader)`
	text-align: center;
	padding: var(--space-xxl) var(--space-lg) var(--space-xl);
`;

const LogoContainer = styled.div`
	width: 640px;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
`;

export default function AboutHeaderContainer() {
	return (
		<AboutHeader>
			<LogoContainer>
				<LogoTextImage layout='responsive' sizes='64rem' />
			</LogoContainer>
		</AboutHeader>
	);
}
