import { ThemeProvider } from 'styled-components';
import { theme } from '../components/themes/DefaultTheme';
import { GlobalStyle } from '../components/styles/GlobalStyles.styled';
import HeadTag from '../components/HeadTag';
import { Navbar } from '../components/Navbar';
import './_app.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<HeadTag />
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				{ process.env.NODE_ENV !== "production" ? <Navbar /> : null}
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
