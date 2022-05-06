import React from "react";
import { useApp } from "app/context/AppContext";

const WordleBoard: React.FC = () => {
  const { wordOfTheDay } = useApp();

  return <>{wordOfTheDay}</>;
};

export default WordleBoard;
