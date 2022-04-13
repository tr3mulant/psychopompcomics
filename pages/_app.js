import { ThemeProvider } from 'styled-components';
import { themeDark, themeLight } from '../components/themes/DefaultTheme';
import { GlobalStyle } from '../components/styles/GlobalStyles.styled';
import HeadTag from '../components/HeadTag';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { GTM_ID, pageview } from '../lib/gtm';
import { MenuProvider } from '../state/useMenuContext';
import { MotionNavbar } from '../components/Navbar';
import {
	MotionConfig,
	AnimatePresence,
	LazyMotion,
	domAnimation,
} from 'framer-motion';
import './_app.css';

export default function App({ Component, pageProps, router }) {
	const [theme, setTheme] = useState('dark');
	const url = `${
		process.env.NODE_ENV == 'production'
			? 'https://psychopompcomics.com'
			: 'localhost'
	}${router.route}`;
	useEffect(() => {
		router.events.on('routeChangeComplete', pageview);
		return () => {
			router.events.off('routeChangeComplete', pageview);
		};
	}, [router.events]);
	return (
		<>
			<HeadTag />
			{/* Google Tag Manager - Global base code */}
			<Script
				id='google-tag-manager'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
				}}
			/>
			<ThemeProvider
				theme={theme == 'light' ? themeLight : themeDark}
				setTheme={setTheme}
			>
				<GlobalStyle />
				<LazyMotion strict features={domAnimation}>
					<MotionConfig reducedMotion='user'>
						<MenuProvider>
							<MotionNavbar />
						</MenuProvider>
						<AnimatePresence exitBeforeEnter>
							<Component {...pageProps} canonical={url} key={url} />
						</AnimatePresence>
					</MotionConfig>
				</LazyMotion>
			</ThemeProvider>
		</>
	);
}
