import { createGlobalStyle } from 'styled-components';
import { theme } from '../themes/DefaultTheme';

/* Drawn from https://web.dev/building-a-color-scheme/ */
export const GlobalStyle = createGlobalStyle`
	* {
		/* brand foundation */
		--brand-hue: 85;
		--brand-saturation: 54%;
		--brand-lightness: 51%;
		--brand-rgb: 142, 198, 63;

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
			.01rem .01rem .01rem rgba(0, 0, 0, 0.02),
			.01rem .01rem .01rem rgba(0, 0, 0, 0.028),
			.03rem .03rem .03rem rgba(0, 0, 0, 0.035),
			.04rem .04rem .04rem rgba(0, 0, 0, 0.042),
			.08rem .08rem .08rem rgba(0, 0, 0, 0.05)
			.2rem .2rem .2rem rgba(0, 0, 0, 0.07);
		--box-shadow-xs-light:
			.01rem .01rem .01rem rgba(0, 0, 0, 0.02),
			.03rem .03rem .03rem rgba(0, 0, 0, 0.028),
			.05rem .05rem .05rem rgba(0, 0, 0, 0.035),
			.09rem .09rem .09rem rgba(0, 0, 0, 0.042),
			.17rem .17rem .17rem rgba(0, 0, 0, 0.05),
			.4rem .4rem .4rem rgba(0, 0, 0, 0.07);
		--box-shadow-sm-light:
			.02rem .02rem .02rem rgba(0, 0, 0, 0.02),
			.04rem .04rem .04rem rgba(0, 0, 0, 0.028),
			.08rem .08rem .08rem rgba(0, 0, 0, 0.035),
			.13rem .13rem .13rem rgba(0, 0, 0, 0.404277),
			.25rem .25rem .25rem rgba(0, 0, 0, 0.05)
			.6rem .6rem .6rem rgba(0, 0, 0, 0.07);
		--box-shadow-ms-light:
			.02rem .02rem .02rem rgba(0, 0, 0, 0.02),
			.05rem .05rem .05rem rgba(0, 0, 0, 0.028),
			.1rem .1rem .09rem rgba(0, 0, 0, 0.035),
			.18rem .18rem .16rem rgba(0, 0, 0, 0.042),
			.33rem .33rem .29rem rgba(0, 0, 0, 0.05),
			.8rem .8rem .7rem rgba(0, 0, 0, 0.07);
		--box-shadow-md-light:
			.03rem .03rem .03rem rgba(0, 0, 0, 0.02),
			.08rem .08rem .07rem rgba(0, 0, 0, 0.028),
			.15rem .15rem .14rem rgba(0, 0, 0, 0.035),
			.27rem .27rem .25rem rgba(0, 0, 0, 0.042),
			.5rem .5rem .46rem rgba(0, 0, 0, 0.05),
			1.2rem 1.2rem 1.1rem rgba(0, 0, 0, 0.07);
		--box-shadow-ml-light:
			.07rem .07rem .06rem rgba(0, 0, 0, 0.02),
			.17rem .17rem .15rem rgba(0, 0, 0, 0.028),
			.31rem .31rem .29rem rgba(0, 0, 0, 0.035),
			.56rem .56rem .51rem rgba(0, 0, 0, 0.042),
			10.04rem 10.04rem .96rem rgba(0, 0, 0, 0.05),
			2.5rem 2.5rem 2.3rem rgba(0, 0, 0, 0.07);
		--box-shadow-lg-light:
			.14rem .14rem .12rem rgba(0, 0, 0, 0.02),
			.33rem .33rem .3rem rgba(0, 0, 0, 0.028),
			.63rem .63rem .56rem rgba(0, 0, 0, 0.035),
			1.12rem 1.12rem 10.01rem rgba(0, 0, 0, 0.042),
			20.09rem 20.09rem 1.88rem rgba(0, 0, 0, 0.05),
			5rem 5rem 4.5rem rgba(0, 0, 0, 0.07);
		--box-shadow-xl-light:
			.28rem .28rem .22rem rgba(0, 0, 0, 0.02),
			.67rem .67rem .53rem rgba(0, 0, 0, 0.028),
			1.25rem 1.25rem 1rem rgba(0, 0, 0, 0.035),
			2.23rem 2.23rem 1.79rem rgba(0, 0, 0, 0.042),
			4.18rem 4.18rem 3.34rem rgba(0, 0, 0, 0.05),
			10rem 10rem 8rem rgba(0, 0, 0, 0.07);

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
			.01rem .01rem .01rem rgba(0, 0, 0, 0.225),
			.01rem .01rem .01rem rgba(0, 0, 0, 0.323),
			.03rem .03rem .03rem rgba(0, 0, 0, 0.4),
			.04rem .04rem .04rem rgba(0, 0, 0, 0.477),
			.08rem .08rem .08rem rgba(0, 0, 0, 0.575)
			.2rem .2rem .2rem rgba(0, 0, 0, 0.8);
		--box-shadow-xs-dark:
			.01rem .01rem .01rem rgba(0, 0, 0,  0.225),
			.03rem .03rem .03rem rgba(0, 0, 0, 0.323),
			.05rem .05rem .05rem rgba(0, 0, 0, 0.4),
			.09rem .09rem .09rem rgba(0, 0, 0, 0.477),
			.17rem .17rem .17rem rgba(0, 0, 0, 0.575),
			.4rem .4rem .4rem rgba(0, 0, 0, 0.8);
		--box-shadow-sm-dark:
			.02rem .02rem .02rem rgba(0, 0, 0, 0.225),
			.04rem .04rem .04rem rgba(0, 0, 0, 0.323),
			.08rem .08rem .08rem rgba(0, 0, 0, 0.4),
			.13rem .13rem .13rem rgba(0, 0, 0, 0.477),
			.25rem .25rem .25rem rgba(0, 0, 0, 0.575)
			.6rem .6rem .6rem rgba(0, 0, 0, 0.8);
		--box-shadow-ms-dark:
			.02rem .02rem .02rem rgba(0, 0, 0, 0.225),
			.05rem .05rem .05rem rgba(0, 0, 0, 0.323),
			.1rem .1rem .09rem rgba(0, 0, 0, 0.4),
			.18rem .18rem .16rem rgba(0, 0, 0, 0.477),
			.33rem .33rem .29rem rgba(0, 0, 0, 0.575),
			.8rem .8rem .7rem rgba(0, 0, 0, 0.8);
		--box-shadow-md-dark:
			.03rem .03rem .03rem rgba(0, 0, 0, 0.225),
			.08rem .08rem .07rem rgba(0, 0, 0, 0.323),
			.15rem .15rem .14rem rgba(0, 0, 0, 0.4),
			.27rem .27rem .25rem rgba(0, 0, 0, 0.477),
			.5rem .5rem .46rem rgba(0, 0, 0, 0.575),
			1.2rem 1.2rem 1.1rem rgba(0, 0, 0, 0.8);
		--box-shadow-ml-dark:
			.07rem .07rem .06rem rgba(0, 0, 0, 0.225),
			.17rem .17rem .15rem rgba(0, 0, 0, 0.323),
			.31rem .31rem .29rem rgba(0, 0, 0, 0.4),
			.56rem .56rem .51rem rgba(0, 0, 0, 0.477),
			10.04rem 10.04rem .96rem rgba(0, 0, 0, 0.575),
			2.5rem 2.5rem 2.3rem rgba(0, 0, 0, 0.8);
		--box-shadow-lg-dark:
			.14rem .14rem .12rem rgba(0, 0, 0, 0.225),
			.33rem .33rem .3rem rgba(0, 0, 0, 0.323),
			.63rem .63rem .56rem rgba(0, 0, 0, 0.4),
			1.12rem 1.12rem 10.01rem rgba(0, 0, 0, 0.477),
			20.09rem 20.09rem 1.88rem rgba(0, 0, 0, 0.575),
			5rem 5rem 4.5rem rgba(0, 0, 0, 0.8);
		--box-shadow-xl-dark:
			.28rem .28rem .22rem rgba(0, 0, 0, 0.225),
			.67rem .67rem .53rem rgba(0, 0, 0, 0.323),
			1.25rem 1.25rem 1rem rgba(0, 0, 0, 0.4),
			2.23rem 2.23rem 1.79rem rgba(0, 0, 0, 0.477),
			4.18rem 4.18rem 3.34rem rgba(0, 0, 0, 0.575),
			10rem 10rem 8rem rgba(0, 0, 0, 0.8);
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
		font-family: ${theme.fonts.secondary};
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
		font-family: ${theme.fonts.primary};
	}

	h4,h5,h6,p,input,button,a {
		font-family: ${theme.fonts.secondary};
	}

	p,input,button,a {
		font-size: 1.8rem;

		@media (max-width: ${theme.breakpoints.md}) {
			font-size: 1.6rem;
		}
	}

	p,input,a {
		line-height: 1.375;
		
		@media (max-width: ${theme.breakpoints.md}) {
			line-height: 1.333;
		}
	}

	h1 {
	font-size: 3.6rem;
	line-height: 1.18;
		
		@media (min-width: ${theme.breakpoints.md}) {
			line-height: 1.06;
			font-size: 5.2rem;
		}
	}

	h2 {
	font-size: 2.8rem;
	line-height: 1.21;
		
		@media (min-width: ${theme.breakpoints.md}) {
			font-size: 3rem;
			line-height: 1.12;
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
