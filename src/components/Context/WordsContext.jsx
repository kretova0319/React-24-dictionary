import React, { createContext, useState, useEffect } from "react";
import Loader from "../Loader/Loader";
const WordsContext = createContext();

const WordsProvider = ({ children }) => {
  const [items, setItems] = useState([]); // Состояние для слов
  const [isLoaded, setIsLoaded] = useState(true); // Состояние для загрузки Loader
  // Состояние для нового слова
  const [newWord, setNewWord] = useState({
    english: "",
    transcription: "",
    russian: "",
    tags: "",
  });

  // Загружаем слова из API со специальной задержкой 2с
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

  //Редактируем и сохраняем слова (уже существующие в таблице)
  const handleSave = async (value, id) => {
    try {
      const response = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${id}/update`,
        {
          method: "POST",
          body: JSON.stringify({
            english: value.english,
            transcription: value.transcription,
            russian: value.russian,
            tags: value.tags,
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

  // Добавляем новые слова
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      // создаем данные для нового слова
      const wordToAdd = {
        id: Math.random().toString(),
        english: newWord.english,
        transcription: newWord.transcription,
        russian: newWord.russian,
        tags: newWord.tags,
        // ...newWord, // так можно заменить предыдущие 4 строки
      };

      // Добавляем новое слово в локальное состояние (items)
      setItems([wordToAdd, ...items]);

      // Сбрасываем форму
      setNewWord({ english: "", transcription: "", tags: "", russian: "" });

      // отправляем запрос в API на добавление нового слова
      const response = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words/add",
        {
          method: "POST",
          body: JSON.stringify(wordToAdd),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add word");
      }
      // В КАКОЙ части кода писать эти строки???
      // // Добавляем новое слово в локальное состояние (items)
      // setItems([wordToAdd, ...items]);

      // // Сбрасываем форму
      // setNewWord({ english: "", transcription: "", tags: "", russian: "" });
    } catch (error) {
      console.error("Error adding word:", error);
    }
  };

  //Удаляем слова из таблицы - просто
  // const deleteItem = (id) => {
  //   let newListItems = items.filter((word) => word.id !== id);
  //   setItems(newListItems);
  // };

  const handleDel = async (id) => {
    try {
      const response = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete word");
      }
      const newListItems = items.filter((word) => word.id !== id);
      setItems(newListItems);
    } catch (error) {
      console.error("Error deleting word:", error);
    }
  };

  return (
    <>
      {isLoaded && <Loader />}
      <WordsContext.Provider
        value={{
          items,
          setItems,
          newWord,
          setNewWord,
          handleDel,
          handleSave,
          handleAdd,
          isLoaded,
        }}
      >
        {children}
      </WordsContext.Provider>
    </>
  );
};

export { WordsProvider, WordsContext };
