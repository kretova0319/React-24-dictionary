import React, { createContext, useState, useEffect } from "react";

const WordsContext = createContext();

const WordsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addWord = (newWord) => {
    setItems([...items, newWord]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch words");
      }
      const data = await response.json();
      console.log(data);
      setItems(data);
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };
  return (
    <WordsContext.Provider value={{ items, addWord, setItems }}>
      {children}
    </WordsContext.Provider>
  );
};
export { WordsProvider, WordsContext };
