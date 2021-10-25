import { ReactElement } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

const client = new QueryClient();

export const ReactQueryClientProvider = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
