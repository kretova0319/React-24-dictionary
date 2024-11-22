import React, { useState, useContext } from "react";
import FlashCard from "./FlashCard";
import style from "./tile.module.css";
import { WordsContext } from "../Context/WordsContext";

export default function Tile() {
  const { items } = useContext(WordsContext);

  const [isEnglish, setisEnglish] = useState(true);

  const showEnglish = () => {
    setisEnglish(true);
  };

  const showRussian = () => {
    setisEnglish(false);
  };
  return (
    <div>
      <form>
        <input type="radio" name="language" value="1" onClick={showEnglish} />{" "}
        Show all ENGLISH
        <input
          type="radio"
          name="language"
          value="2"
          onClick={showRussian}
        />{" "}
        Show all RUSSIAN
      </form>

      <div className={style.wrapper__tile}>
        {items.map((card) => (
          <FlashCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
