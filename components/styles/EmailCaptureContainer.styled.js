import styled from 'styled-components'

const EmailCaptureContainer = styled.article`
	display: flex;
	justify-content: center;
	align-items: stretch;

	& input {
		max-width: calc(100% - 109px);
	}
`;

export default EmailCaptureContainer;