import React, { createContext, useState, useEffect } from "react";

const WordsContext = createContext();

const WordsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  // Состояние для загрузки Loader
  const [isLoaded, setIsLoaded] = useState(true);

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
      setIsLoaded(false);
      setItems(data);
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };
  // добавляем новые слова в таблицу
  //   const addWord = (newWord) => {
  //     setItems([...items, newWord]);
  //   };
  const addWord = async (newWord) => {
    try {
      const response = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words/add"
      );
      if (!response.ok) {
        throw new Error("Failed to add word");
      }
      setItems([...items, newWord]);
    } catch (error) {
      console.error("Error adding word:", error);
    }
  };

  // удаляем слова из таблицы
  // const deleteItem = (id) => {
  //   let newListItems = items.filter((word) => word.id !== id);
  //   setItems(newListItems);
  // };
  const deleteItem = async (id) => {
    try {
      const response = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${id}/22/delete`,
        { method: "POST" }
      );
      if (!response.ok) {
        throw new Error("Failed to delete word");
      }
      let newListItems = items.filter((word) => word.id !== id);
      setItems(newListItems);
    } catch (error) {
      console.error("Error deleting word:", error);
    }
  };

  return (
    <WordsContext.Provider
      value={{ items, addWord, setItems, deleteItem, isLoaded }}
    >
      {children}
    </WordsContext.Provider>
  );
};

export { WordsProvider, WordsContext };
