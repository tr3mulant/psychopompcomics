import { ThemeProvider } from 'styled-components'
import { theme } from '../components/themes/DefaultTheme'
import { GlobalStyle } from '../components/styles/GlobalStyles.styled'
import './_app.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}