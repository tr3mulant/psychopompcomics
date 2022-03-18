import styled from 'styled-components';

const TwoUpContainer = styled.div`
	display: flex;
	flex-wrap: wrap;

	& > *:first-child {
		@media (min-width: ${(props) => props.theme.breakpoints.md}) {
			border-right: ${(props) =>
				props.divided ? '0.1rem solid var(--surface4)' : 'none'};
		}
	}
`;

const TwoUp = styled.article`
	width: 100%;
	padding-left: ${(props) => props.theme.spaces.xl};
	padding-right: ${(props) => props.theme.spaces.xl};
	margin-bottom: ${(props) => props.theme.spaces.xxl};

	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		margin-bottom: initial;
		width: 50%;
	}
`;

export { TwoUpContainer, TwoUp };
