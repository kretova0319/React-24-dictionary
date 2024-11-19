import React, { useState, useContext } from "react";
import Card from "../Cards/Card";
import CardWrapper from "../CardWrapper/CardWrapper";
import styles from "./carusel.module.css";
// import { WordsContext } from "../Context/WordsContext";
import { items } from "../../data";

export default function Carusel() {
  // const { items } = useContext(WordsContext);

  const [position, setPosition] = useState(8);
  const [pressed, setPressed] = useState(false);
  const { english, transcription, russian } = items[position];
  const [count, setCount] = useState(0);

  //Посчитать и вывести количество проверенных карточек
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
      <h1>Количество карточек, изученных сегодня: {count}</h1>
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
