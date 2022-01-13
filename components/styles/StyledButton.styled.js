import styled from 'styled-components'

const StyledButton = styled.button`
	background-color: var(--brand);
	color: var(--text-on-brand);
	border: none;
	padding: ${props => props.theme.spaces.sm} ${props => props.theme.spaces.lg};
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 300ms ease;
	font-weight: bold;

	&:hover {
		filter: brightness(115%);
	}
`;

export default StyledButton;