import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  maxWidth: '1000px',
  black: '#000',
  softLime: '#E9EFE1',
  offWhite: '#F2F2F2',
  paleOrange: '#F0D8CE',
  rose: '#EDA6A6',
  darkGreen: '#4A6146',
  ocean: '#60B89C',
  softOcean: '#9ED8C2',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
}

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: ${props => props.theme.softLime};
    height: 100%;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Arial Black', Gadget, sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

const StyledPage = styled.div`
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 5rem auto;
  padding: 2rem;
  color: ${props => props.theme.black};
`;

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <StyledPage>
            <Inner>
              <Component {...pageProps} />
            </Inner>
          </StyledPage>
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
