import { useState } from "react";
import style from "./tile.module.css";

export default function FlashCard({ english, russian }) {
  const [isClicked, setIsClicked] = useState(false);

  const changeCard = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div
      className={
        isClicked
          ? style.flashcard + " " + style.green
          : style.flashcard + " " + style.grey
      }
      onClick={changeCard}
    >
      <div className={style.flashcard__main}>
        {isClicked ? (
          <p className={style.flash__word}>{russian}</p>
        ) : (
          <p className={style.flash__word}>{english}</p>
        )}
      </div>
      <div>
        <button className={style.flash__btn}>click</button>
      </div>
    </div>
  );
}
