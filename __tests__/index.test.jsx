import { ThemeProvider } from 'styled-components';
import { themeDark } from '../components/themes/DefaultTheme';
import { GlobalStyle } from '../components/styles/GlobalStyles.styled';
import Home from '../pages/index';
import { render, screen } from '@testing-library/react';
import '../__mocks__/intersection-observer';

const HomePage = () => {
	render(
		<>
			<GlobalStyle />
			<ThemeProvider theme={themeDark}>
				<Home />
			</ThemeProvider>
		</>
	);
};

describe('Home Page', () => {
	it('should render the hero banner', () => {
		HomePage();
		const heroImg = screen.getByRole('img', {
			name: /seed of cain(.+banner)/i,
		});
		expect(heroImg).toBeInTheDocument();
	});
	it('should render a comic logo bar', () => {
		HomePage();
		const socLogo = screen.getByRole('img', {
			name: /seed of cain logo/i,
		});
		expect(socLogo).toBeInTheDocument();
	});

	it('should render an email input', () => {
		HomePage();
		const textbox = screen.getByRole('textbox', { type: 'email' });
		expect(textbox).toBeInTheDocument();
		expect(textbox).not.toBeDisabled();
	});
});
