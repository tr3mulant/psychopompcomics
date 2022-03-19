import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledCopyright = styled.span`
	text-transform: uppercase;
`;

export const StyledCopyrightContainer = styled.div`
	margin-bottom: ${(props) => props.theme.spaces.md};
	@media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
		width: 100%;
		grid-column-start: 1;
		grid-column-end: 4;
		grid-row-start: 2;
	}
`;

export const StyledMotionFooter = styled(motion.footer)`
	max-width: 100%;
	text-align: center;
	background-color: var(--surface1);
	border-top: 0.1rem solid hsl(var(--brand-hue) 10% 50% / 15%);
	margin-top: ${(props) => props.theme.spaces.lg};
	padding: ${(props) => props.theme.spaces.lg};
	@media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
		margin-top: ${(props) => props.theme.spaces.xxl};
		padding: ${(props) => props.theme.spaces.lg}
			${(props) => props.theme.spaces.xxl} 0;
	}
`;
