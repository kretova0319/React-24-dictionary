import React, { useState, useEffect } from "react";
import Card from "../Cards/Card";
import { data } from "../../data";
import CardWrapper from "../CardWrapper/CardWrapper";
import styles from "./carusel.module.css";

export default function Carusel() {
  const [position, setPosition] = useState(8);
  const [pressed, setPressed] = useState(false);
  const { english, transcription, russian } = data[position];
  const [count, setCount] = useState(0);

  // Получаем с API список слов, загружаем на страницу - НЕ РАБОТАЕТ!!!!
  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   getWords();
  // }, []);

  // const getWords = async () => {
  //   const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
  //   const datatWords = await response.json();
  //   console.log(datatWords);
  //   setWords(datatWords);
  // };

  //Посчитать и вывести количество проверенных карточек
  function handleClick() {
    setPressed(!pressed);
    setCount(count + 1);
  }
  // Показать предыдущую карточку
  const showPreviousCard = () => {
    if (position === 0) {
      setPosition(data.length - 1);
      setPressed(false);
    } else {
      setPosition(position - 1);
      setPressed(false);
    }
  };
  // Показать следующую карточку
  const showNextCard = () => {
    if (position === data.length - 1) {
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
        {position + 1}/{data.length}
      </div>
    </div>
  );
}
