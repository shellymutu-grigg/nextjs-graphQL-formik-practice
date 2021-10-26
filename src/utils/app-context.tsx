import React, { createContext, useState } from 'react';

// Added populated interface to allow app-context to work correctly with typescript
export interface AppContextData {
  appContextValue?: any;
  setAppContext?: (value: any) => void;
}

export const AppContext = createContext<AppContextData>({});

const AppContextProvider: React.FC = ({ children }) => {
  const [appContextValue, setAppContextValue] = useState({});

  const setAppContext = (data: Partial<AppContextData>) => {
    // Syntax needed to be adjusted to work correctly with typescript
    setAppContextValue({ ...appContextValue, ...data });
  };

  return (
    <AppContext.Provider value={{ appContextValue, setAppContext }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
