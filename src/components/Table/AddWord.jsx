import React from "react";
import Button from "../Button/Button";
import styles from "./addWord.module.css";

export default function AddWord() {
  return (
    <div className={styles.newword}>
      <h2>Add new word</h2>
      <form className={styles.wordsContainer}>
        <div className={styles.wordContainer}>
          <input type="text" name="english" placeholder="Enter english word" />
        </div>
        <div className={styles.wordContainer}>
          <input
            type="text"
            name="transcription"
            placeholder="Enter transcription"
          />
        </div>
        <div className={styles.wordContainer}>
          <input type="text" name="tag" placeholder="Enter theme" />
        </div>
        <div className={styles.wordContainer}>
          <input type="text" name="russian" placeholder="Enter russian word" />
        </div>
        <Button text="Add" color="btnGrassGreen" />
      </form>
    </div>
  );
}
