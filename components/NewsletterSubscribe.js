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
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
		// margin-top: 0px;
		// margin-bottom: 12px;
		max-width: 30.4rem;
		* {
			font-size: ${(props) => props.theme.fonts.sizes.xxs}
		}
		a {
			min-width: 9rem;
		}

	}
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
		display: none;
`;

export default NewsletterSubscribe;
