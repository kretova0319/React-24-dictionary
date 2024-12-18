import Button from "../Button/Button";
import styles from "./addWord.module.css";
import React, { useEffect } from "react";
import useValidation from "../../../src/Hooks/useValidation";
import { observer } from "mobx-react-lite";
import { useStore } from "../../Store/TaskStoreContext";

const AddWord = observer(() => {
  const { taskStore } = useStore();
  const {
    inputErrorText,
    isInputError,
    isDisabled,
    setIsDisabled,
    validateField,
  } = useValidation();

  // Валидация для кнопки "Add"
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
  }, [isInputError, setIsDisabled]);

  // функция ввода слов в 4 input-a
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    validateField(name, value);
    taskStore.newWord[name] = value; // Обновляем значение в `newWord`
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
            value={taskStore.newWord.english}
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
            value={taskStore.newWord.transcription}
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
            value={taskStore.newWord.tags}
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
            value={taskStore.newWord.russian}
            onChange={handleChange}
          />
          {inputErrorText.russian && isInputError.russian && (
            <p className={styles.error}>{inputErrorText.russian}</p>
          )}
        </div>
        <Button
          text="Add"
          color="btnGrassGreen"
          handler={taskStore.handleAdd}
          handleDisabled={isDisabled}
        />
      </form>
    </div>
  );
});
export default AddWord;
