import { createGlobalStyle } from 'styled-components'
import { theme } from '../themes/DefaultTheme'

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	h1,h2,h3,h4,h5,h6 {
		font-weight: 900;
	}

	h1,h2,h3 {
		font-family: ${(theme.fonts.primary)}
	}

	h4,h5,h6,p,input {
		font-family: ${(theme.fonts.secondary)}
	}

	p,input,button {
		font-size: 1.2em;
	}

	h1 {
		font-size: 52px;
		line-height: 55px;

		@media (max-width: ${(theme.breakpoints.md)}) {
			font-size: 36px;
			line-height: 42px;
		}
	}

	h2 {
		font-size: 30px;
		line-height: 34px;

		@media (max-width: ${(theme.breakpoints.md)}) {
			font-size: 28px;
			line-height: 34px;
		}

	h3 {
		font-size: 22px;
		line-height: 28px;
	}

	h4 {
		font-size: 18px;
		line-height: 24px;
	}

	h5 {
		font-size: 16px;
		line-height: 20px;
	}
`;