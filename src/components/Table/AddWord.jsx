import React from "react";
import Button from "../Button/Button";
import styles from "./addWord.module.css";

export default function AddWord({ newWord, setNewWord, handleAdd }) {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // validateField(name, value);
    setNewWord((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className={styles.newword}>
      <h2>Add new word</h2>
      <form className={styles.wordsContainer}>
        <div className={styles.wordContainer}>
          <input
            type="text"
            name="english"
            placeholder="Enter english word"
            value={newWord.english}
            onChange={handleChange}
          />
        </div>
        <div className={styles.wordContainer}>
          <input
            type="text"
            name="transcription"
            placeholder="Enter transcription"
            value={newWord.transcription}
            onChange={handleChange}
          />
        </div>
        <div className={styles.wordContainer}>
          <input
            type="text"
            name="tags"
            placeholder="Enter theme"
            value={newWord.tags}
            onChange={handleChange}
          />
        </div>
        <div className={styles.wordContainer}>
          <input
            type="text"
            name="russian"
            placeholder="Enter russian word"
            value={newWord.russian}
            onChange={handleChange}
          />
        </div>
        <Button text="Add" color="btnGrassGreen" handler={handleAdd} />
      </form>
    </div>
  );
}
