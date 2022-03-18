import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledMotionNavLinkList = styled(motion.ul)`
	width: 50%;
	display: flex;
	justify-content: center;
	list-style: none;
	padding: 0;
	margin-left: auto;
	li {
		display: flex;
		align-items: center;
	}
	li + li:before {
		content: '';
		background-color: var(--surface4);
		// height: 50%;
		width: 2px;
		margin: 0 1rem;
		height: 75%;
	}
	@media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
		li:last-child {
			display: none;
		}
	}
	@media only screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
		width: unset;
	}
	@media only screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
		li * {
			font-size: ${(props) => props.theme.fonts.sizes.md};
		}
	}
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
		width: unset;
		margin-right: auto;
		li * {
			font-size: ${(props) => props.theme.fonts.sizes.xxs};
		}
	}
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
		position: fixed;
		top: 10%;
		width: 100%;
		height: 90%;
		flex-direction: column;
		justify-content: flex-start;

		li * {
			flex-grow: 1;
			text-align: center;
		}

		li {
			padding: ${(props) => props.theme.spaces.ml};
		}

		li:last-child {
			margin-bottom: ${(props) => props.theme.spaces.lg};
		}

		li:last-child * {
			flex-grow: unset;
		}

		li:not(li:last-child) {
			border-bottom: 2px solid var(--surface4);
		}

		li + li:before {
			display: none;
			margin: 0;
		}

		li a {
			transition-delay: 150ms;
		}
	}
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.xs}) {
		top: 12.5%;
		height: 87.5%;
	}
	@media only screen and (max-width: ${(props) =>
			props.theme.breakpoints.xxs}) {
		top: 15%;
		height: 85%;
	}
`;
