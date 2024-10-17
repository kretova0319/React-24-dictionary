import React, { useState } from "react";
import Cards from "../Cards/Cards";
import { data } from "../../data";
import CardWrapper from "../CardWrapper/CardWrapper";

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
        <Cards
          key={position.id}
          englishWord={english}
          transcription={transcription}
          russianWord={russian}
          pressed={pressed}
          handleClick={handleClick}
        />
      </CardWrapper>
      <div className="number">
        {position + 1}/{data.length}
      </div>
    </div>
  );
}
