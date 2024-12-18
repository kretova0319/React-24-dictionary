import Button from "../Button/Button";
import styles from "./addWord.module.css";
import React, { useContext, useEffect } from "react";
import { WordsContext } from "../../Context/WordsContext";
import useValidation from "../../../src/Hooks/useValidation";

// export default function AddWord() {
// добавляем функцию addTask из TaskContext
// const { newWord, setNewWord, handleAdd } = useContext(WordsContext);

export default function AddWord({ newWord, setNewWord, handleAdd }) {
  const {
    inputErrorText,
    isInputError,
    isDisabled,
    setIsDisabled,
    validateField,
  } = useValidation();

  useEffect(() => {
    if (
      isInputError.english ||
      isInputError.transcription ||
      isInputError.russian ||
      isInputError.tags
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [isInputError]);

  // функция ввода слов в 4 input-a
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    validateField(name, value);
    setNewWord((prev) => ({ ...prev, [name]: value })); // Обновляем значение в `newWord`
  };
  return (
    <div className={styles.newword}>
      <h2>Add new word</h2>
      <form
        className={styles.wordsContainer}
        // Зачем??? ведь и так работает по нажатию на ентер
        // onSubmit={(e) => e.preventDefault()}
      >
        <div className={styles.wordContainer}>
          <input
            type="text"
            name="english"
            placeholder="Enter english word"
            value={newWord.english}
            onChange={handleChange}
          />
          {inputErrorText.english && isInputError.english && (
            <p className={styles.error}>{inputErrorText.english}</p>
          )}
        </div>
        <div className={styles.wordContainer}>
          <input
            type="text"
            name="transcription"
            placeholder="Enter transcription"
            value={newWord.transcription}
            onChange={handleChange}
          />
          {inputErrorText.transcription && isInputError.transcription && (
            <p className={styles.error}>{inputErrorText.transcription}</p>
          )}
        </div>
        <div className={styles.wordContainer}>
          <input
            type="text"
            name="tags"
            placeholder="Enter theme"
            value={newWord.tags}
            onChange={handleChange}
          />
          {inputErrorText.tags && isInputError.tags && (
            <p className={styles.error}>{inputErrorText.tags}</p>
          )}
        </div>
        <div className={styles.wordContainer}>
          <input
            type="text"
            name="russian"
            placeholder="Enter russian word"
            value={newWord.russian}
            onChange={handleChange}
          />
          {inputErrorText.russian && isInputError.russian && (
            <p className={styles.error}>{inputErrorText.russian}</p>
          )}
        </div>
        <Button
          text="Add"
          color="btnGrassGreen"
          handler={handleAdd}
          handleDisabled={isDisabled}
        />
      </form>
    </div>
  );
}
