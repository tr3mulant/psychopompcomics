import styled from 'styled-components';
import NewsletterSubscribe from '../NewsletterSubscribe';
import SectionContainer from './SectionContainer.styled';
import { DiscordIcon, TwitterIcon } from '../SocialIcons';

const FooterOuter = styled.footer`
	background-color: var(--surface0);
	max-width: 100%;
	overflow: hidden;
	padding-left: ${(props) => props.theme.spaces.lg};
	padding-right: ${(props) => props.theme.spaces.lg};
`;

const StyledFooterContainer = styled(SectionContainer)`
	padding-top: ${({ theme }) => theme.spaces.lg};
	padding-bottom: ${({ theme }) => theme.spaces.lg};
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
	& > * {
		width: 100%;
	}

	& > * + * {
		margin-top: ${({ theme }) => theme.spaces.lg};
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		& > * {
			width: initial;
			max-width: 50%;
		}

		& > * + * {
			margin-top: initial;
		}
	}
`;

const EmailContainer = styled.div`
	h5 {
		margin-bottom: ${({ theme }) => theme.spaces.md};
		text-align: center;
	}
`;

const SocialContainer = styled.article`
	display: flex;
	align-items: center;
	justify-content: center;
	h5 + div,
	div + div {
		margin-left: ${({ theme }) => theme.spaces.md};
	}
`;

export default function StyledFooter() {
	return (
		<FooterOuter>
			<StyledFooterContainer>
				<EmailContainer>
					<h5>{'Sign up for Email Updates'}</h5>
					<NewsletterSubscribe />
				</EmailContainer>
				<SocialContainer>
					<h5>{'Follow Us'}</h5>
					<DiscordIcon />
					<TwitterIcon />
				</SocialContainer>
			</StyledFooterContainer>
		</FooterOuter>
	);
}
