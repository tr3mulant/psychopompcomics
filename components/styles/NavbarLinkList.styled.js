import styled, { useTheme } from 'styled-components';
import { motion } from 'framer-motion';

const StyledMotionNavLinkList = styled(motion.ul)`
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
		height: 50%;
		width: 2px;
	}
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
		width: unset;
		margin-top: 0;
		margin-right: auto;
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
			padding: ${(props) => props.theme.spaces.ms};
		}

		li:last-child {
			margin-bottom: ${(props) => props.theme.spaces.lg};
		}

		li:not(li:last-child) {
			border-bottom: 2px solid var(--surface4);
		}

		li + li:before {
			display: none;
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

export const StyledMotionNavLinkList_1 = styled(StyledMotionNavLinkList)`
	li + li:before {
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
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
		li {
			padding: ${(props) => props.theme.spaces.ml};
		}

		li:last-child * {
			flex-grow: unset;
		}

		li + li:before {
			margin: 0;
		}
	}
`;

const NavLinkList = styled.ul`
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
		height: 50%;
		width: 2px;
	}
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
		width: unset;
		margin-top: 0;
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
		transition: 0.3s ease-in-out;
		overflow: ${({ openMenu }) => (openMenu ? `scroll` : `unset`)};

		//from left
		transform: ${({ openMenu }) =>
			openMenu ? `translateX(0)` : `translateX(-100%)`};

		li * {
			flex-grow: 1;
			text-align: center;
		}

		li {
			padding: ${(props) => props.theme.spaces.ms};
		}

		li:last-child {
			margin-bottom: ${(props) => props.theme.spaces.lg};
		}

		li:not(li:last-child) {
			border-bottom: 2px solid var(--surface4);
		}

		li + li:before {
			display: none;
		}

		li a {
			opacity: ${({ openMenu }) => (openMenu ? `1` : `0`)};
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

export const NavLinkList_1 = styled(NavLinkList)``;

export const NavLinkList_2 = styled(NavLinkList)`
	li + li:before {
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
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
		//from right
		transform: ${({ openMenu }) =>
			openMenu ? `translateX(0)` : `translateX(100%)`};

		li {
			padding: ${(props) => props.theme.spaces.ml};
		}

		li:last-child * {
			flex-grow: unset;
		}

		li + li:before {
			margin: 0;
		}
	}
`;

export const NavLinkList_3 = styled(NavLinkList)`
	li + li:before {
		background-color: var(--surface4);
		height: 75%;
	}

	@media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
		//from upper right corner
		transform: ${({ openMenu }) =>
			openMenu ? `translate(0%,0%)` : `translate(100%,-100%) scale(0.5)`};
	}
`;

export const NavLinkList_4 = styled(NavLinkList)`
	li + li:before {
		background-color: var(--surface3);
	}

	@media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
		//from bottom right corner
		transform: ${({ openMenu }) =>
			openMenu ? `translate(0%,0%)` : `translate(100%,100%) scale(0.5)`};

		li:not(li:last-child) {
			border-bottom: 2px solid var(--surface3);
		}
	}
`;

export const NavLinkList_5 = styled(NavLinkList)`
	li + li:before {
		background-color: var(--surface1);
	}
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
		//from bottom
		transform: ${({ openMenu }) =>
			openMenu ? `translateY(0)` : `translateY(100%)`};
	}
`;

export const NavLinkList_6 = styled(NavLinkList)`
	li + li:before {
		background-color: var(--surface1);
	}
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
		top: ${({ openMenu }) => (openMenu ? `16%` : `0`)};
		margin: 0 auto;
		//from top
		transform: ${({ openMenu }) =>
			openMenu ? `translateY(0)` : `translateY(-100%)`};
		opacity: ${({ openMenu }) => (openMenu ? `1` : `0`)};
	}
`;

export const NavLinkList_7 = styled(NavLinkList)`
	li + li:before {
		background-color: var(--surface1);
	}
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
		//from right
		transform: ${({ openMenu }) =>
			openMenu ? `translateX(20%)` : `translateX(100%)`};

		li {
			transform: translateX(20%);
			justify-content: flex-start;
		}
	}
`;
