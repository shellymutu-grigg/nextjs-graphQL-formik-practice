import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import AppContextProvider from '@utils/app-context';
import theme from '@theme/theme';
import { ReactQueryClientProvider } from '@components/ReactQueryClientProvider/ReactQueryClientProvider';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;

  return (
    <ReactQueryClientProvider>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </ThemeProvider>
      </AppContextProvider>
    </ReactQueryClientProvider>
  );
}
