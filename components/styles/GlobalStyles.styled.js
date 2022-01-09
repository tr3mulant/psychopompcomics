import { createGlobalStyle } from 'styled-components'
import { theme } from '../themes/DefaultTheme'

export const GlobalStyle = createGlobalStyle`
	* {
		/* brand foundation */
		--brand-hue: ${ theme.brandhsl.hue };
		--brand-saturation: ${ theme.brandhsl.saturation };
		--brand-lightness: ${ theme.brandhsl.lightness };

		/* light */
		--brand-light: hsl(var(--brand-hue) var(--brand-saturation) var(--brand-lightness));
		--text1-light: hsl(var(--brand-hue) var(--brand-saturation) 10%);
		--text2-light: hsl(var(--brand-hue) 30% 30%);
		--surface1-light: hsl(var(--brand-hue) 25% 90%);
		--surface2-light: hsl(var(--brand-hue) 20% 99%);
		--surface3-light: hsl(var(--brand-hue) 20% 92%);
		--surface4-light: hsl(var(--brand-hue) 20% 85%);
		--surface-shadow-light: var(--brand-hue) 10% 20%;
		--shadow-strength-light: .02;

		/* dark */
		--brand-dark: hsl(
			var(--brand-hue) 
			calc(var(--brand-saturation))
			calc(var(--brand-lightness))
		);
		--text1-dark: hsl(var(--brand-hue) 15% 85%);
		--text2-dark: hsl(var(--brand-hue) 5% 65%);
		--surface1-dark: hsl(var(--brand-hue) 10% 10%);
		--surface2-dark: hsl(var(--brand-hue) 10% 15%);
		--surface3-dark: hsl(var(--brand-hue) 5%  20%);
		--surface4-dark: hsl(var(--brand-hue) 5% 25%);
		--surface-shadow-dark: var(--brand-hue) 50% 3%;
		--shadow-strength-dark: .8;

		/* dim */
		--brand-dim: hsl(
			var(--brand-hue) 
			calc(var(--brand-saturation) / 1.25)
			calc(var(--brand-lightness) / 1.25)
		);
		--text1-dim: hsl(var(--brand-hue) 15% 75%);
		--text2-dim: hsl(var(--brand-hue) 10% 61%);
		--surface1-dim: hsl(var(--brand-hue) 10% 20%);
		--surface2-dim: hsl(var(--brand-hue) 10% 25%);
		--surface3-dim: hsl(var(--brand-hue) 5%  30%);
		--surface4-dim: hsl(var(--brand-hue) 5% 35%);
		--surface-shadow-dim: var(--brand-hue) 30% 13%;
		--shadow-strength-dim: .2;
	}

	:root {
	color-scheme: light;

	/* set defaults */
	--brand: var(--brand-light);
	--text1: var(--text1-light);
	--text2: var(--text2-light);
	--surface1: var(--surface1-light);
	--surface2: var(--surface2-light);
	--surface3: var(--surface3-light);
	--surface4: var(--surface4-light);
	--surface-shadow: var(--surface-shadow-light);
	--shadow-strength: var(--shadow-strength-light);
	}

	@media (prefers-color-scheme: dark) {
	:root {
		color-scheme: dark;

		--brand: var(--brand-dark);
		--text1: var(--text1-dark);
		--text2: var(--text2-dark);
		--surface1: var(--surface1-dark);
		--surface2: var(--surface2-dark);
		--surface3: var(--surface3-dark);
		--surface4: var(--surface4-dark);
		--surface-shadow: var(--surface-shadow-dark);
		--shadow-strength: var(--shadow-strength-dark);
	}
	}

	[color-scheme="light"] {
	color-scheme: light;

	--brand: var(--brand-light);
	--text1: var(--text1-light);
	--text2: var(--text2-light);
	--surface1: var(--surface1-light);
	--surface2: var(--surface2-light);
	--surface3: var(--surface3-light);
	--surface4: var(--surface4-light);
	--surface-shadow: var(--surface-shadow-light);
	--shadow-strength: var(--shadow-strength-light);
	}

	[color-scheme="dark"] {
	color-scheme: dark;

	--brand: var(--brand-dark);
	--text1: var(--text1-dark);
	--text2: var(--text2-dark);
	--surface1: var(--surface1-dark);
	--surface2: var(--surface2-dark);
	--surface3: var(--surface3-dark);
	--surface4: var(--surface4-dark);
	--surface-shadow: var(--surface-shadow-dark);
	--shadow-strength: var(--shadow-strength-dark);
	}

	[color-scheme="dim"] {
	color-scheme: dark;

	--brand: var(--brand-dim);
	--text1: var(--text1-dim);
	--text2: var(--text2-dim);
	--surface1: var(--surface1-dim);
	--surface2: var(--surface2-dim);
	--surface3: var(--surface3-dim);
	--surface4: var(--surface4-dim);
	--surface-shadow: var(--surface-shadow-dim);
	--shadow-strength: var(--shadow-strength-dim);
	}

	/* Box sizing rules */
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	/* Set core root defaults */
	html:focus-within {
		scroll-behavior: smooth;
	}

	html {
		-webkit-font-smoothing: antialiased;
		touch-action: manipulation;
		text-rendering: optimizelegibility;
		text-size-adjust: 100%;
		font-size: 62.5%;
	}

	/* Remove default margin */
	body,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	figure,
	blockquote,
	dl,
	dd,
	input,
	button {
		margin: 0;
	}

	input {
		border: none;
	}

	body {
		padding: 0;
		box-sizing: border-box;
		background-color: ${(theme.surface1)};
		min-height: 100vh;
		text-rendering: optimizeSpeed;
		line-height: 1.5;
		font-family: ${(theme.fonts.secondary)};
		color: ${(theme.text1)};
		font-feature-settings: "kern";
	}

	/* A elements that don't have a class get default styles */
	a:not([class]) {
		text-decoration-skip-ink: auto;
	}

	/* Make images easier to work with */
	img,
	picture {
		max-width: 100%;
		display: block;
	}

	h1,h2,h3,h4,h5,h6 {
		font-weight: 400;
	}

	h1,h2,h3 {
		font-family: ${(theme.fonts.primary)};
	}

	h4,h5,h6,p,input {
		font-family: ${(theme.fonts.secondary)};
	}

	p,input,button {
		font-size: 1.8rem;
		line-height: 1.333;

		@media (max-width: ${(theme.breakpoints.md)}) {
			font-size: 1.6rem;
			line-height: 1.375;
		}
	}

	h1 {
		font-size: 5.2rem;
		line-height: 1.06;

		@media (max-width: ${(theme.breakpoints.md)}) {
			font-size: 3.6rem;
			line-height: 1.18;
		}
	}

	h2 {
		font-size: 3rem;
		line-height: 1.12;

		@media (max-width: ${(theme.breakpoints.md)}) {
			font-size: 2.8rem;
			line-height: 1.21;
		}
	}

	h3 {
		font-size: 2.2rem;
		line-height: 1.27;
	}

	h4 {
		font-size: 1.8rem;
		line-height: 1.333;
	}

	h5 {
		font-size: 1.6rem;
		line-height: 1.25;
	}

	/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
	@media (prefers-reduced-motion: reduce) {
		html:focus-within {
			scroll-behavior: auto;
		}

		*,
		*::before,
		*::after {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}
`;