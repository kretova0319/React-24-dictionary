import React, { useState } from "react";
import Card from "../Cards/Card";
import { data } from "../../data";
import CardWrapper from "../CardWrapper/CardWrapper";
import styles from "./carusel.module.css";

export default function Carusel() {
  const [position, setPosition] = useState(8);
  const [pressed, setPressed] = useState(false);
  const { english, transcription, russian } = data[position];

  function handleClick() {
    setPressed(!pressed);
  }

  const showPreviousCard = () => {
    if (position === 0) {
      setPosition(data.length - 1);
      setPressed(false);
    } else {
      setPosition(position - 1);
      setPressed(false);
    }
  };

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
