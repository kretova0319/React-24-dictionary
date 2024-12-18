import React, { useState, useContext } from "react";
import Card from "../Cards/Card";
import CardWrapper from "../CardWrapper/CardWrapper";
import styles from "./carusel.module.css";
import { WordsContext } from "../../Context/WordsContext";
// import { items } from "../../data";

export default function Carusel() {
  //передаем состояние (слова из API) из WordsContext
  const { items } = useContext(WordsContext);

  const [position, setPosition] = useState(0);
  const [pressed, setPressed] = useState(false);

  // создаем и деструктуризируем currentItem
  const currentItem = items[position] || {};
  const { english, transcription, russian } = currentItem;

  //Посчитать и вывести количество проверенных карточек
  const [count, setCount] = useState(0);
  function handleClick() {
    setPressed(!pressed);
    setCount(count + 1);
  }
  // Показать предыдущую карточку
  const showPreviousCard = () => {
    if (position === 0) {
      setPosition(items.length - 1);
      setPressed(false);
    } else {
      setPosition(position - 1);
      setPressed(false);
    }
  };
  // Показать следующую карточку
  const showNextCard = () => {
    if (position === items.length - 1) {
      setPosition(0);
      setPressed(false);
    } else {
      setPosition(position + 1);
      setPressed(false);
    }
  };

  return (
    <div>
      <h2>Количество карточек, изученных сегодня: {count}</h2>
      <CardWrapper
        showPreviousCard={showPreviousCard}
        showNextCard={showNextCard}
      >
        <Card
          key={position.id}
          english={english}
          transcription={transcription}
          russian={russian}
          pressed={pressed}
          handleClick={handleClick}
        />
      </CardWrapper>
      <div className={styles.number}>
        {position + 1}/{items.length}
      </div>
    </div>
  );
}
