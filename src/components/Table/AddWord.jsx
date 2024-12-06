import Button from "../Button/Button";
import styles from "./addWord.module.css";
import React, { useContext, useState } from "react";
import { WordsContext } from "../Context/WordsContext";

export default function AddWord() {
  // добавляем функцию addTask из TaskContext
  const { handleAdd } = useContext(WordsContext);

  // Добавляем состояние для компонента
  const [newWord, setNewWord] = useState("");

  return (
    <div className={styles.newword}>
      <h2>Add new word</h2>
      <input
        type="text"
        placeholder="Enter english word"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter transcription"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter theme"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter russian word"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
      />
      <Button text="Add" color="btnGrassGreen" handler={handleAdd} />
    </div>
  );
}
