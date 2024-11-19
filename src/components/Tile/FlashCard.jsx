import { useState } from "react";
import style from "./tile.module.css";

export default function FlashCard({ english, russian, isEnglish }) {
  const [isClicked, setIsClicked] = useState(false);

  const changeCard = () => {
    setIsClicked(!isClicked);
  };
  // где обьявлять эту const? isEnglish - нужен здесь, setisEnglish - нужен в компоненте Tile
  // const [isEnglish, setisEnglish] = useState(true);

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
          <p className={style.flash__word}>{isEnglish ? english : russian}</p>
        ) : (
          <p className={style.flash__word}>{isEnglish ? russian : english}</p>
        )}
      </div>
      <div>
        <button className={style.flash__btn}>click</button>
      </div>
    </div>
  );
}
