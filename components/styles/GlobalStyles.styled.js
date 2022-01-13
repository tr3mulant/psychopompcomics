import { createGlobalStyle } from 'styled-components'
import { theme } from '../themes/DefaultTheme'

export const GlobalStyle = createGlobalStyle`
	* {
		/* brand foundation */
		--brand-hue: 85;
		--brand-saturation: 54%;
		--brand-lightness: 51%;

		/* light */
		--brand-hue-light: var(--brand-hue);
		--brand-saturation-light: var(--brand-saturation);
		--brand-lightness-light: var(--brand-lightness);
		
		--surface1-hue-light: var(--brand-hue-light);
		--surface1-saturation-light: 20%;
		--surface1-lightness-light: 99%;
		
		--surface2-hue-light: var(--brand-hue-light);
		--surface2-saturation-light: 20%;
		--surface2-lightness-light: 92%;
		
		--surface3-hue-light: var(--brand-hue-light);
		--surface3-saturation-light: 25%;
		--surface3-lightness-light: 90%;

		--surface4-hue-light: var(--brand-hue-light);
		--surface4-saturation-light: 20%;
		--surface4-lightness-light: 85%;

		--text1-hue-light: var(--brand-hue-light);
		--text1-saturation-light: var(--brand-saturation-light);
		--text1-lightness-light: 10%;

		--text2-hue-light: var(--brand-hue-light);
		--text2-saturation-light: 30%;
		--text2-lightness-light: 30%;

		--text-on-brand-hue-light: 0;
		--text-on-brand-saturation-light: 0%;
		--text-on-brand-lightness-light: 0%;

		--brand-light: hsl(var(--brand-hue-light) var(--brand-saturation-light) var(--brand-lightness-light));
		--text1-light: hsl(var(--brand-hue-light) var(--text1-saturation-light) var(--text1-lightness-light));
		--text2-light: hsl(var(--brand-hue-light) var(--text2-saturation-light) var(--text2-lightness-light));
		--text-on-brand: hsl(var(--text-on-brand-hue-light) var(--text-on-brand-saturation-light) var(--text-on-brand-lightness-light));
		--surface1-light: hsl(var(--surface1-hue-light) var(--surface1-saturation-light) var(--surface1-lightness-light));
		--surface2-light: hsl(var(--surface2-hue-light) var(--surface2-saturation-light) var(--surface2-lightness-light));
		--surface3-light: hsl(var(--surface3-hue-light) var(--surface3-saturation-light) var(--surface3-lightness-light));
		--surface4-light: hsl(var(--surface4-hue-light) var(--surface4-saturation-light) var(--surface4-lightness-light));
		/* Shadows generated with https://shadows.brumm.af */
		--box-shadow-xxs-light:
			0.1px 0.1px 0.1px rgba(0, 0, 0, 0.02),
			0.1px 0.1px 0.1px rgba(0, 0, 0, 0.028),
			0.3px 0.3px 0.3px rgba(0, 0, 0, 0.035),
			0.4px 0.4px 0.4px rgba(0, 0, 0, 0.042),
			0.8px 0.8px 0.8px rgba(0, 0, 0, 0.05)
			2px 2px 2px rgba(0, 0, 0, 0.07);
		--box-shadow-xs-light:
			0.1px 0.1px 0.1px rgba(0, 0, 0, 0.02),
			0.3px 0.3px 0.3px rgba(0, 0, 0, 0.028),
			0.5px 0.5px 0.5px rgba(0, 0, 0, 0.035),
			0.9px 0.9px 0.9px rgba(0, 0, 0, 0.042),
			1.7px 1.7px 1.7px rgba(0, 0, 0, 0.05),
			4px 4px 4px rgba(0, 0, 0, 0.07);
		--box-shadow-sm-light:
			0.2px 0.2px 0.2px rgba(0, 0, 0, 0.02),
			0.4px 0.4px 0.4px rgba(0, 0, 0, 0.028),
			0.8px 0.8px 0.8px rgba(0, 0, 0, 0.035),
			1.3px 1.3px 1.3px rgba(0, 0, 0, 0.404277),
			2.5px 2.5px 2.5px rgba(0, 0, 0, 0.05)
			6px 6px 6px rgba(0, 0, 0, 0.07);
		--box-shadow-ms-light:
			0.2px 0.2px 0.2px rgba(0, 0, 0, 0.02),
			0.5px 0.5px 0.5px rgba(0, 0, 0, 0.028),
			1px 1px 0.9px rgba(0, 0, 0, 0.035),
			1.8px 1.8px 1.6px rgba(0, 0, 0, 0.042),
			3.3px 3.3px 2.9px rgba(0, 0, 0, 0.05),
			8px 8px 7px rgba(0, 0, 0, 0.07);
		--box-shadow-md-light:
			0.3px 0.3px 0.3px rgba(0, 0, 0, 0.02),
			0.8px 0.8px 0.7px rgba(0, 0, 0, 0.028),
			1.5px 1.5px 1.4px rgba(0, 0, 0, 0.035),
			2.7px 2.7px 2.5px rgba(0, 0, 0, 0.042),
			5px 5px 4.6px rgba(0, 0, 0, 0.05),
			12px 12px 11px rgba(0, 0, 0, 0.07);
		--box-shadow-ml-light:
			0.7px 0.7px 0.6px rgba(0, 0, 0, 0.02),
			1.7px 1.7px 1.5px rgba(0, 0, 0, 0.028),
			3.1px 3.1px 2.9px rgba(0, 0, 0, 0.035),
			5.6px 5.6px 5.1px rgba(0, 0, 0, 0.042),
			10.4px 10.4px 9.6px rgba(0, 0, 0, 0.05),
			25px 25px 23px rgba(0, 0, 0, 0.07);
		--box-shadow-lg-light:
			1.4px 1.4px 1.2px rgba(0, 0, 0, 0.02),
			3.3px 3.3px 3px rgba(0, 0, 0, 0.028),
			6.3px 6.3px 5.6px rgba(0, 0, 0, 0.035),
			11.2px 11.2px 10.1px rgba(0, 0, 0, 0.042),
			20.9px 20.9px 18.8px rgba(0, 0, 0, 0.05),
			50px 50px 45px rgba(0, 0, 0, 0.07);
		--box-shadow-xl-light:
			2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
			6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
			12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
			22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
			41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
			100px 100px 80px rgba(0, 0, 0, 0.07);

		/* dark */
		--brand-dark: hsl(
			var(--brand-hue) 
			calc(var(--brand-saturation))
			calc(var(--brand-lightness))
		);

		--brand-hue-dark: var(--brand-hue);
		--brand-saturation-dark: var(--brand-saturation);
		--brand-lightness-dark: var(--brand-lightness);
		
		--surface1-hue-dark: 0;
		--surface1-saturation-dark: 0%;
		--surface1-lightness-dark: 5.9%;
		
		--surface2-hue-dark: 345;
		--surface2-saturation-dark: 6.1%;
		--surface2-lightness-dark: 12.9%;
		
		--surface3-hue-dark: 345;
		--surface3-saturation-dark: 3%;
		--surface3-lightness-dark: 25.9%;

		--surface4-hue-dark: 345;
		--surface4-saturation-dark: 2.1%;
		--surface4-lightness-dark: 38%;

		--text1-hue-dark: 0;
		--text1-saturation-dark: 0%;
		--text1-lightness-dark: 100%;

		--text2-hue-dark: 82.5;
		--text2-saturation-dark: 53.3%;
		--text2-lightness-dark: 94.1%;

		--text-on-brand-hue-dark: 0;
		--text-on-brand-saturation-dark: 0%;
		--text-on-brand-lightness-dark: 0%;

		--text1-dark: hsl(var(--text1-hue-dark) var(--text1-saturation-dark) var(--text1-lightness-dark));
		--text2-dark: hsl(var(--text2-hue-dark) var(--text2-saturation-dark) var(--text2-lightness-dark));
		--surface1-dark: hsl(var(--surface1-hue-dark) var(--surface1-saturation-dark) var(--surface1-lightness-dark));
		--surface2-dark: hsl(var(--surface2-hue-dark) var(--surface2-saturation-dark) var(--surface2-lightness-dark));
		--surface3-dark: hsl(var(--surface3-hue-dark) var(--surface3-saturation-dark) var(--surface3-lightness-dark));
		--surface4-dark: hsl(var(--surface4-hue-dark) var(--surface4-saturation-dark) var(--surface4-lightness-dark));
		--box-shadow-xxs-dark:
			0.1px 0.1px 0.1px rgba(0, 0, 0, 0.225),
			0.1px 0.1px 0.1px rgba(0, 0, 0, 0.323),
			0.3px 0.3px 0.3px rgba(0, 0, 0, 0.4),
			0.4px 0.4px 0.4px rgba(0, 0, 0, 0.477),
			0.8px 0.8px 0.8px rgba(0, 0, 0, 0.575)
			2px 2px 2px rgba(0, 0, 0, 0.8);
		--box-shadow-sm-dark:
			0.2px 0.2px 0.2px rgba(0, 0, 0, 0.225),
			0.4px 0.4px 0.4px rgba(0, 0, 0, 0.323),
			0.8px 0.8px 0.8px rgba(0, 0, 0, 0.4),
			1.3px 1.3px 1.3px rgba(0, 0, 0, 0.477),
			2.5px 2.5px 2.5px rgba(0, 0, 0, 0.575)
			6px 6px 6px rgba(0, 0, 0, 0.8);
		--box-shadow-ms-dark:
			0.2px 0.2px 0.2px rgba(0, 0, 0, 0.225),
			0.5px 0.5px 0.5px rgba(0, 0, 0, 0.323),
			1px 1px 0.9px rgba(0, 0, 0, 0.4),
			1.8px 1.8px 1.6px rgba(0, 0, 0, 0.477),
			3.3px 3.3px 2.9px rgba(0, 0, 0, 0.575),
			8px 8px 7px rgba(0, 0, 0, 0.8);
		--box-shadow-md-dark:
			0.3px 0.3px 0.3px rgba(0, 0, 0, 0.225),
			0.8px 0.8px 0.7px rgba(0, 0, 0, 0.323),
			1.5px 1.5px 1.4px rgba(0, 0, 0, 0.4),
			2.7px 2.7px 2.5px rgba(0, 0, 0, 0.477),
			5px 5px 4.6px rgba(0, 0, 0, 0.575),
			12px 12px 11px rgba(0, 0, 0, 0.8);
		--box-shadow-ml-dark:
			0.7px 0.7px 0.6px rgba(0, 0, 0, 0.225),
			1.7px 1.7px 1.5px rgba(0, 0, 0, 0.323),
			3.1px 3.1px 2.9px rgba(0, 0, 0, 0.4),
			5.6px 5.6px 5.1px rgba(0, 0, 0, 0.477),
			10.4px 10.4px 9.6px rgba(0, 0, 0, 0.575),
			25px 25px 23px rgba(0, 0, 0, 0.8);
		--box-shadow-lg-dark:
			1.4px 1.4px 1.2px rgba(0, 0, 0, 0.225),
			3.3px 3.3px 3px rgba(0, 0, 0, 0.323),
			6.3px 6.3px 5.6px rgba(0, 0, 0, 0.4),
			11.2px 11.2px 10.1px rgba(0, 0, 0, 0.477),
			20.9px 20.9px 18.8px rgba(0, 0, 0, 0.575),
			50px 50px 45px rgba(0, 0, 0, 0.8);
		--box-shadow-xl-dark:
			2.8px 2.8px 2.2px rgba(0, 0, 0, 0.225),
			6.7px 6.7px 5.3px rgba(0, 0, 0, 0.323),
			12.5px 12.5px 10px rgba(0, 0, 0, 0.4),
			22.3px 22.3px 17.9px rgba(0, 0, 0, 0.477),
			41.8px 41.8px 33.4px rgba(0, 0, 0, 0.575),
			100px 100px 80px rgba(0, 0, 0, 0.8);
	}

	:root {
	color-scheme: light;

	/* set defaults */
	--brand: var(--brand-light);
	--text1: var(--text1-light);
	--text2: var(--text2-light);
	--text-on-brand: var(--text-on-brand-light));
	--surface1: var(--surface1-light);
	--surface2: var(--surface2-light);
	--surface3: var(--surface3-light);
	--surface4: var(--surface4-light);
	--box-shadow-xxs: var(--box-shadow-xxs-light);
	--box-shadow-xs: var(--box-shadow-xs-light);
	--box-shadow-sm: var(--box-shadow-sm-light);
	--box-shadow-ms: var(--box-shadow-ms-light);
	--box-shadow-md: var(--box-shadow-md-light);
	--box-shadow-ml: var(--box-shadow-ml-light);
	--box-shadow-lg: var(--box-shadow-lg-light);
	--box-shadow-xl: var(--box-shadow-xl-light);
	}

	@media (prefers-color-scheme: dark) {
	:root {
		color-scheme: dark;

		--brand: var(--brand-dark);
		--text1: var(--text1-dark);
		--text2: var(--text2-dark);
		--text-on-brand: var(--text-on-brand-dark);
		--surface1: var(--surface1-dark);
		--surface2: var(--surface2-dark);
		--surface3: var(--surface3-dark);
		--surface4: var(--surface4-dark);
		--box-shadow-xxs: var(--box-shadow-xxs-dark);
		--box-shadow-xs: var(--box-shadow-xs-dark);
		--box-shadow-sm: var(--box-shadow-sm-dark);
		--box-shadow-ms: var(--box-shadow-ms-dark);
		--box-shadow-md: var(--box-shadow-md-dark);
		--box-shadow-ml: var(--box-shadow-ml-dark);
		--box-shadow-lg: var(--box-shadow-lg-dark);
		--box-shadow-xl: var(--box-shadow-xl-dark);
	}
}

	[color-scheme="light"] {
	color-scheme: light;

	--brand: var(--brand-light);
	--text1: var(--text1-light);
	--text2: var(--text2-light);
	--text-on-brand: var(--text-on-brand-light));
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
	--text-on-brand: var(--text-on-brand-dark);
	--surface1: var(--surface1-dark);
	--surface2: var(--surface2-dark);
	--surface3: var(--surface3-dark);
	--surface4: var(--surface4-dark);
	--surface-shadow: var(--surface-shadow-dark);
	--shadow-strength: var(--shadow-strength-dark);
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
		background-color: var(--surface1);
		min-height: 100vh;
		text-rendering: optimizeSpeed;
		line-height: 1.5;
		font-family: ${(theme.fonts.secondary)};
		color: var(--text1);
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