import Button from "../Button/Button";
import styles from "./addWord.module.css";
import React, { useContext, useEffect } from "react";
import { WordsContext } from "../Context/WordsContext";
import useValidation from "../../../src/Hooks/useValidation";

// export default function AddWord() {
// добавляем функцию addTask из TaskContext
// const { newWord, setNewWord, handleAdd } = useContext(WordsContext);

// Добавляем состояние для компонента
// const [newWord, setNewWord] = useState("");
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
      isInputError.russian
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [isInputError]);

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
        onSubmit={(e) => e.preventDefault()}
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
            placeholder="Enter theme"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
          />
          {inputErrorText.transcription && isInputError.transcription && (
            <p className={styles.error}>{inputErrorText.transcription}</p>
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
