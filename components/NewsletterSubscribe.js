import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styled from 'styled-components';
import NewsletterForm from './NewsletterForm';

const NewsletterSubscribe = ({ className }) => {
	const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

	return (
		<MailchimpSubscribe
			url={MAILCHIMP_URL}
			render={(props) => {
				const { subscribe, status, message } = props || {};
				return (
					<NewsletterForm
						className={className}
						status={status}
						message={message}
						onValidated={(formData) => subscribe(formData)}
					/>
				);
			}}
		/>
	);
};

export const NavNewsletterSubscribe = styled(NewsletterSubscribe)`
	margin: auto auto;
	display: flex;
	flex-direction: column;
	position: relative;

	& .newsletter-form-info {
		position: absolute;
		top: calc(var(--space-md) * 3);
		width: 100%;
		left: 50%;
		transform: translateX(-50%);
	}
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		max-width: 30.4rem;
		* {
			font-size: var(--font-size-xxs);
		}
		a {
			min-width: 9rem;
		}
	}
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: none;
	}
`;

export const MobileNavNewsletterSubscribe = styled(NavNewsletterSubscribe)`
	display: flex;
	padding: 0 var(--space-xl) var(--space-xl) var(--space-xl);
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		flex-direction: column;
		padding: 0 0 var(--space-xl);
	}
`;

export default NewsletterSubscribe;
