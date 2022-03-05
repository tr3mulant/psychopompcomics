/* Colors
	primary: '#8dc63f',
	primary50: '#f2f8e8',
	primary100: '#ddeec6',
	primary200: '#c7e3a1',
	primary300: '#b1d77b',
	primary400: '#9fcf5d',
	primary500: '#8dc63f',
	primary600: '#7eb637',
	primary700: '#69a22d',
	primary800: '#558e24',
	primary900: '#316c11',
	secondary: '#231F20',
	secondary50: '#fef8fa',
	secondary100: '#f9f3f5',
	secondary200: '#f2eced',
	secondary300: '#e3dedf',
	secondary400: '#c0babc',
	secondary500: '#a19b9d',
	secondary600: '#777374',
	secondary700: '#635f60',
	secondary800: '#444041',
	secondary900: '#231f20',
	white: '#fff',
	black: '#000',
	offblack: '#0f0f0f'
*/

export const theme = {
	fonts: {
		primary: '"Archive", sans-serif',
		secondary: '"Roboto", sans-serif;',
		sizes: {
			xxs: '1.4rem',
			xs: '1.6rem',
			sm: '1.8rem',
			ms: '2.2rem',
			md: '2.8rem',
			ml: '3rem',
			lg: '3.6rem',
			xl: '4.8rem',
			xxl: '5.2rem',
			xxxl: '6.4rem',
		},
	},
	breakpoints: {
		xxs: '368px',
		xs: '576px',
		sm: '768px',
		md: '992px',
		lg: '1280px',
		xl: '1600px',
	},
	spaces: {
		zero: '0',
		xs: '0.2rem',
		sm: '0.4rem',
		ms: '0.8rem',
		md: '1.2rem',
		ml: '1.6rem',
		lg: '2.4rem',
		xl: '3.2rem',
		xxl: '6.4rem',
		xxxl: '9.6rem',
	},

	motion: {
		pageTransitionVariants: {
			hidden: {
				opacity: 0,
			},
			visible: {
				opacity: 1,
				transition: { when: 'beforeChildren' },
			},
			exit: {
				x: '-50vw',
				opacity: 0,
				transition: { ease: 'easeInOut' },
			},
		},
	},
};
