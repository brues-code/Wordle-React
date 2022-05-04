import React, { createContext, FC, useContext, useMemo } from "react";

interface State {}

const initialState: State = {};

export const AppContext = createContext(initialState);

const AppContextProvider: FC = ({ children }) => {
  const contextState: State = {};

  return (
    <AppContext.Provider value={contextState}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

export default AppContextProvider;
