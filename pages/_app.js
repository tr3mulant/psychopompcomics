import { createGlobalStyle, ThemeProvider } from 'styled-components'
import "./_app.css"

const theme = {
	colors: {
    	primary: '#b8b8b8',
		secondary: '#2c2c2c',
  	},
	fonts: {
		primary: '"Roboto", sans-serif',
		secondary: '"Rokkitt", serif;'
	},
	breakpoints: {
		xxl: '1899px',
		xl: '1599px',
		lg: '1279px',
		md: '991px',
		sm: '767px',
		xs: '575px',
		xxs: '374px'
	},
	spaces: {
		zero: "0px",
		xs: "2px",
		sm: "4px",
		ms: "8px",
		md: "12px",
		ml: "16px",
		lg: "24px",
		xl: "32px",
		xxl: "64px",
		xxxl: "96px"
	}
}

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	h1,h2,h3,h4,h5,h6 {
		font-weight: 900;
	}

	h1,h2,h3 {
		font-family: ${(theme.fonts.primary)}
	}

	h4,h5,h6,p{
		font-family: ${(theme.fonts.secondary)}
	}

	h1 {
		font-size: 52px;
		line-height: 55px;

		@media (max-width: ${(theme.breakpoints.md)}) {
			font-size: 36px;
			line-height: 42px;
		}
	}

	h2 {
		font-size: 30px;
		line-height: 34px;

		@media (max-width: ${(theme.breakpoints.md)}) {
			font-size: 28px;
			line-height: 34px;
		}

	h3 {
		font-size: 22px;
		line-height: 28px;
	}

	h4 {
		font-size: 18px;
		line-height: 24px;
	}

	h5 {
		font-size: 16px;
		line-height: 20px;
	}
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}