import { ThemeProvider } from 'styled-components';
import { theme } from '../components/themes/DefaultTheme';
import { GlobalStyle } from '../components/styles/GlobalStyles.styled';
import Home from '../pages/index';
import { render, screen } from '@testing-library/react';

const ComingSoonPage = () => {
	render(
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Home />
			</ThemeProvider>
		</>
	);
};

describe('Coming Soon Page', () => {
	it('should render the heading', () => {
		ComingSoonPage();
		const heading = screen.getByRole('heading', {
			name: /coming soon/i,
		});

		expect(heading).toBeInTheDocument();
	});

	it('should render the article', () => {
		ComingSoonPage();
		const article = screen.getByRole('article');

		expect(article).toBeInTheDocument();
	});

	it('should render a logo', () => {
		ComingSoonPage();
		const logo = screen.getByRole('img', { name: /psychopomp Comics/i });
		expect(logo).toBeInTheDocument();
	});

	it('should render a call to action', () => {
		ComingSoonPage();
		const heading = screen.getByRole('heading', { name: /sign up/i });
		expect(heading).toBeInTheDocument();
	});

	it('should render an email input', () => {
		ComingSoonPage();
		const textbox = screen.getByRole('textbox', { type: 'email' });
		expect(textbox).toBeInTheDocument();
		expect(textbox).not.toBeDisabled();
	});

	it('should render a submit button', () => {
		ComingSoonPage();
		const button = screen.getByRole('link', { name: /submit/i });
		expect(button).toBeInTheDocument();
		expect(button).not.toBeDisabled();
	});
});
