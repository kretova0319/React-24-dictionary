// import React, { useContext, useState } from "react";
import React, { useState } from "react";
// import { WordsContext } from "../Context/WordsContext";

const addWord = () => {
  // добавляем функцию addTask из TaskContext
  //   const { addWord } = useContext(WordsContext);

  // Добавляекм состояние для компонента
  const [newWord, setNewWord] = useState("");

  const addWord = (e) => {
    e.preventDefault();
    if (newWord.trim() === "") return; //Проверка на пустую строку

    addWord({ id: Math.random(), english: newWord });
    setNewWord(""); // Обнуляем поле инпут
  };

  return (
    <div className="new-word">
      <input
        type="text"
        placeholder="Enter word"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
      />
      <button onClick={addWord}>Add</button>
    </div>
  );
};

export default addWord;
