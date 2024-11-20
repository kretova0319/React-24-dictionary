import React, { createContext, useState, useEffect } from "react";

const WordsContext = createContext();

const WordsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // добавляем новые слова в таблицу
  const addWord = (newWord) => {
    setItems([...items, newWord]);
  };

  // удаляем слова из таблицы
  const deleteItem = (id) => {
    let newListItems = items.filter((word) => word.id !== id);
    setItems(newListItems);
  };

  // Загружаем слова из API
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
      setItems(data);
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };
  return (
    <WordsContext.Provider value={{ items, addWord, setItems, deleteItem }}>
      {children}
    </WordsContext.Provider>
  );
};
export { WordsProvider, WordsContext };
