import React, { useState } from "react";
import Cards from "../Cards/Cards";
import { data } from "../../data";
import leftArrow from "../../Assets/left-arrow.svg";
import rihgtArrow from "../../Assets/right-arrow.svg";
import styles from "./carusel.module.css";

export default function Carusel() {
  const [word, setWord] = useState(8);
  const { english, transcription, russian } = data[word];

  const showPreviousCard = () => {
    setWord((word) => {
      word = word - 1;
      if (word < 0) {
        word = data.length - 1;
      }
      return word;
    });
  };
  // так не работает
  //   const showNextCard = () => {
  //     setWord(word + 1);
  // if (word > data.length - 1) {
  //   word = 0;
  // }
  // return word;
  //   };

  const showNextCard = () => {
    setWord((word) => {
      word++;
      if (word > data.length - 1) {
        word = 0;
      }
      return word;
    });
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={showPreviousCard} className={styles.arrow}>
        <img src={leftArrow} width="30px" alt="left arrow" />
      </button>
      <Cards
        key={word.id}
        englishWord={english}
        transcription={transcription}
        russianWord={russian}
      />
      <button onClick={showNextCard} className={styles.arrow}>
        <img src={rihgtArrow} width="30px" alt="right arrow" />
      </button>
    </div>
  );
}
