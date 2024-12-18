import React, { useState, useEffect } from "react";
import Card from "../Cards/Card";
import CardWrapper from "../CardWrapper/CardWrapper";
import styles from "./carusel.module.css";
import { observer } from "mobx-react-lite";
import { useStore } from "../../Store/TaskStoreContext";

const Carusel = observer(() => {
  const { taskStore } = useStore();
  //передаем состояние (слова из API) из WordsContext
  useEffect(() => {
    taskStore.loadData();
  }, [taskStore]);
  const [position, setPosition] = useState(0);
  const [pressed, setPressed] = useState(false);

  // создаем и деструктуризируем currentItem
  const currentItem = taskStore.words[position];
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
      setPosition(taskStore.words.length - 1);
      setPressed(false);
    } else {
      setPosition(position - 1);
      setPressed(false);
    }
  };
  // Показать следующую карточку
  const showNextCard = () => {
    if (position === taskStore.words.length - 1) {
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
        {position + 1}/{taskStore.words.length}
      </div>
    </div>
  );
});
export default Carusel;
