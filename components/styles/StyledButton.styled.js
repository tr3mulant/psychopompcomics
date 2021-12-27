import styled from 'styled-components'

const StyledButton = styled.button`
	background-color: #000;
	color: ${ props=>props.theme.colors.primary };
	border: none;
	padding: ${ props=>props.theme.spaces.sm} ${ props=>props.theme.spaces.lg};
	border-radius: 4px;
	font-size: ${ props=>props.theme.fonts.sizes.md};
	cursor: pointer;
	transition: background-color 300ms ease;

	&:hover {
		background-color: #202020;
	}
`;

export default StyledButton;