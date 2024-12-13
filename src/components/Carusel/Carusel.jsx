import React, { useState, useEffect } from "react";
import Card from "../Cards/Card";
import CardWrapper from "../CardWrapper/CardWrapper";
import styles from "./carusel.module.css";

export default function Carusel() {
  const [words, setWords] = useState([]); // Состояние для изначального списка слов
  const [position, setPosition] = useState(0); // состояние для номера 1-ой карточки
  const [pressed, setPressed] = useState(false); // состояние кликнута карточка для проверки или нет
  const [count, setCount] = useState(0); // состояние для подсчета кликнутых карточек

  // Получаем с API список слов, загружаем на страницу
  useEffect(() => {
    getWords();
  }, []);

  const getWords = async () => {
    const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
    const datatWords = await response.json();
    console.log(datatWords);
    setWords(datatWords);
  };

  // При загрузке слов с API возникает ошибка, если слова еще не загрузились.
  // Поэтому сначала проверяем наличие текущего элемента
  const currentWord = words[position] || {};
  const { english, transcription, russian } = currentWord;

  //Посчитать и вывести количество проверенных карточек
  function handleClick() {
    setPressed(!pressed);
    setCount(count + 1);
  }
  // Показать предыдущую карточку
  const showPreviousCard = () => {
    if (position === 0) {
      setPosition(words.length - 1);
      setPressed(false);
    } else {
      setPosition(position - 1);
      setPressed(false);
    }
  };
  // Показать следующую карточку
  const showNextCard = () => {
    if (position === words.length - 1) {
      setPosition(0);
      setPressed(false);
    } else {
      setPosition(position + 1);
      setPressed(false);
    }
  };

  return words.length > 0 ? (
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
        {position + 1}/{words.length}
      </div>
    </div>
  ) : (
    <p>Загрузка данных</p>
  );
}
