import React, { useState } from "react";
import style from "./tile.module.css";

export default function FlashCard({ english, russian, isEnglish }) {
  const [isFlipped, setIsFlipped] = useState(false); // Состояние переворота карточки

  const toggleCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${style.flashcard} ${
        isFlipped
          ? isEnglish
            ? style.green
            : style.grey
          : isEnglish
          ? style.grey
          : style.green
      }`}
      onClick={toggleCard}
    >
      <div className={style.flashcard__main}>
        {isFlipped ? (
          <p className={style.flash__word}>{isEnglish ? russian : english}</p>
        ) : (
          <p className={style.flash__word}>{isEnglish ? english : russian}</p>
        )}
      </div>
      <div>
        <button className={style.flash__btn}>Flip</button>
      </div>
    </div>
  );
}
