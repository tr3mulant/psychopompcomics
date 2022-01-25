import { ThemeProvider } from 'styled-components';
import { theme } from '../components/themes/DefaultTheme';
import { GlobalStyle } from '../components/styles/GlobalStyles.styled';
import Head from 'next/head';
import './_app.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
					key='apple-touch-icon'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
					key='favicon32'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
					key='favicon16'
				/>
				<link rel='manifest' href='/site.webmanifest' key='manifest' />
				<link
					rel='mask-icon'
					href='/safari-pinned-tab.svg'
					color='#5bbad5'
					key='mask-icon'
				/>
				<meta
					name='msapplication-TileColor'
					content='#000000'
					key='msapplication-TileColor'
				/>
				<meta name='theme-color' content='#000000' key='theme-color' />
			</Head>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
