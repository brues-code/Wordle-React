import React, { createContext, FC, useContext, useMemo } from "react";
import { GetWordOfTheDay } from "app/utils/todays_word";

interface State {
  wordOfTheDay: string;
}

const initialState: State = {
  wordOfTheDay: ""
};

export const AppContext = createContext(initialState);

const AppContextProvider: FC = ({ children }) => {
  const wordOfTheDay = useMemo(() => GetWordOfTheDay(new Date()), []);

  const contextState: State = {
    wordOfTheDay
  };

  return (
    <AppContext.Provider value={contextState}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

export default AppContextProvider;
