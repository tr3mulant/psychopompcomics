import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledCopyright = styled.span`
	text-transform: uppercase;
`;

export const StyledCopyrightContainer = styled.div`
	margin-bottom: ${({ theme }) => theme.spaces.md};
	width: 100%;
	grid-column-start: 1;
	grid-column-end: 4;
	grid-row-start: 2;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: initial;
		grid-column-start: initial;
		grid-column-end: initial;
		grid-row-start: initial;
	}
`;

export const StyledMotionFooter = styled(motion.footer)`
	max-width: 100%;
	text-align: center;
	background-color: var(--surface1);
	border-top: 0.1rem solid hsl(var(--brand-hue) 10% 50% / 15%);
	margin-top: ${({ theme }) => theme.spaces.xxl};
	padding: ${({ theme }) => theme.spaces.lg} ${({ theme }) => theme.spaces.xxl}
		0;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-top: ${({ theme }) => theme.spaces.lg};
		padding: ${({ theme }) => theme.spaces.lg};
	}
`;
