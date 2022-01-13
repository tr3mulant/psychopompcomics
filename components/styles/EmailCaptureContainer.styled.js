import styled from 'styled-components'

const EmailCaptureContainer = styled.article`
	max-width: 334px;
	margin: 24px auto;
	display: flex;
	justify-content: center;
	align-items: stretch;
	box-shadow: var(--box-shadow-xxs);
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;

	& input {
		max-width: calc(100% - 109px);
	}

	& button {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
`;

export default EmailCaptureContainer;