// pages/_app.js
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ReactQueryClientProvider } from '@components/ReactQueryClientProvider/ReactQueryClientProvider';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ReactQueryClientProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ReactQueryClientProvider>
  );
}
