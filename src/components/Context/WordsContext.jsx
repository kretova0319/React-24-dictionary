import React, { createContext, useState, useEffect } from "react";
import Loader from "../Loader/Loader";
const WordsContext = createContext();

const WordsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  // Состояние для загрузки Loader
  const [isLoaded, setIsLoaded] = useState(true);

  // Загружаем слова из API
  // useEffect(() => {
  //   loadData();
  // }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      loadData();
    }, 2000);

    return () => clearTimeout(timer);
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

  //Редактируем и сохраняем слова
  const handleSave = async (value, id) => {
    try {
      const response = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${id}/22/update`,
        {
          method: "POST",
          body: JSON.stringify({
            english: value.english,
            transcription: value.transcription,
            russian: value.russian,
            tags: [],
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to save word");
      }
      loadData();
    } catch (error) {
      console.error("Error saving word:", error);
    }
  };

  const handleAdd = async (value) => {
    console.log("работает");
    // const newWord = {
    //   id: Math.random(),
    //   english: value.english,
    //   transcription: value.transcription,
    //   russian: value.russian,
    // };

    // setItems([newWord, ...items]);
    // const response = await fetch(
    //   "http://itgirlschool.justmakeit.ru/api/words/add",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       english: value.english,
    //       transcription: value.transcription,
    //       russian: value.russian,
    //       tags: [],
    //     }),
    //   }
    // );
  };
  // const handleAdd = async (value) => {
  //   try {
  //     const newWord = {
  //       id: Math.random(),
  //       english: value.english,
  //       transcription: value.transcription,
  //       russian: value.russian,
  //     };

  //     setItems([newWord, ...items]);
  //     const response = await fetch(
  //       "http://itgirlschool.justmakeit.ru/api/words/add",
  //       {
  //         method: "POST",
  //         body: JSON.stringify({
  //           english: value.english,
  //           transcription: value.transcription,
  //           russian: value.russian,
  //           tags: [],
  //         }),
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Failed to add word");
  //     }
  //     // setItems([...items, newWord]);
  //   } catch (error) {
  //     console.error("Error adding word:", error);
  //   }
  // };

  // удаляем слова из таблицы
  const deleteItem = (id) => {
    let newListItems = items.filter((word) => word.id !== id);
    setItems(newListItems);
  };
  // const deleteItem = async (id) => {
  //   try {
  //     const response = await fetch(
  //       `http://itgirlschool.justmakeit.ru/api/words/${id}/22/delete`,
  //       { method: "POST" }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Failed to delete word");
  //     }
  //     let newListItems = items.filter((word) => word.id !== id);
  //     setItems(newListItems);
  //   } catch (error) {
  //     console.error("Error deleting word:", error);
  //   }
  // };

  return (
    <>
      {isLoaded && <Loader />}
      <WordsContext.Provider
        value={{ items, setItems, deleteItem, handleSave, handleAdd, isLoaded }}
      >
        {children}
      </WordsContext.Provider>
    </>
  );
};

export { WordsProvider, WordsContext };
