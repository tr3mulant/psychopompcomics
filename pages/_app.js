import { ThemeProvider } from 'styled-components';
import { theme } from '../components/themes/DefaultTheme';
import { GlobalStyle } from '../components/styles/GlobalStyles.styled';
import HeadTag from '../components/HeadTag';
import { Navbar } from '../components/Navbar';
import { MotionConfig, AnimatePresence } from 'framer-motion';
import './_app.css';

export default function App({ Component, pageProps, router }) {
	const url = `${
		process.env.NODE_ENV == 'production'
			? 'https://psychopompcomics.com'
			: 'localhost'
	}${router.route}`;
	return (
		<>
			<HeadTag />
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<MotionConfig reducedMotion='user'>
					{process.env.NODE_ENV !== 'production' ? <Navbar /> : null}
					<AnimatePresence exitBeforeEnter>
						<Component {...pageProps} canonical={url} key={url} />
					</AnimatePresence>
				</MotionConfig>
			</ThemeProvider>
		</>
	);
}
