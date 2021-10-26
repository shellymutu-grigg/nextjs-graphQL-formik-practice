import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { render, queries, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import AppContextProvider from '@utils/app-context';
import theme from '@theme/theme';
import { ReactQueryClientProvider } from '@components/ReactQueryClientProvider/ReactQueryClientProvider';

const Provider: React.FC = ({ children }) => (
  <ReactQueryClientProvider>
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <UserProvider>{children}</UserProvider>
      </ThemeProvider>
    </AppContextProvider>
  </ReactQueryClientProvider>
);

const themeRenderer = (
  ui: React.ReactElement,
  options: RenderOptions<typeof queries, HTMLElement> | undefined = {},
) =>
  render(ui, {
    wrapper: Provider,
    ...options,
  });

export { themeRenderer as render };

export * from '@testing-library/react';
