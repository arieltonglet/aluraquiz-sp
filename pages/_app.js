import { createGlobalStyle, ThemeProvider } from 'styled-components';

import db from '../db.json';
import Fonts from '../src/components/Fonts';
import SEO from '../src/components/SEO';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

    &::selection {
      background-color: ${({ theme }) => theme.colors.highlight};
      color: ${({ theme }) => theme.colors.mainBg};
    }
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText}
  }

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

// Get theme from json
const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Fonts />
        <SEO />

        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
