import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';
import Head from 'next/head';
// import { AppProps } from 'next/app';
// import { useRouter } from 'next/router';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
// import { ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { AppContextProvider } from '@utils/app-context';
import theme from '@theme/theme';
// import '@theme/global.css';
// import { ReactQueryClientProvider } from '@components/ReactQueryClientProvider/ReactQueryClientProvider';
// import { ApolloProvider } from '@apollo/client';
// import { clientForAjax } from '@utils/apollo-client-config'

export default function MyApp(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;
  // const { user } = pageProps;
  // const router = useRouter();

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  });
  return (
    <>
      <Head>
        <title>Next.js</title>
        <meta
          name="viewport"
          content="minimum-scale=1, inital-scale=1, width=device-width"
        />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      {/* <ReactQueryClientProvider> */}
      {/* <ApolloProvider client={clientForAjax}> */}
      {/* <AppContextProvider> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <UserProvider user={user}> */}
        <Component {...pageProps} />
        {/* </UserProvider> */}
      </ThemeProvider>
      {/* </AppContextProvider> */}
      {/* </ApolloProvider> */}
      {/* </ReactQueryClientProvider> */}
    </>
  );
}
