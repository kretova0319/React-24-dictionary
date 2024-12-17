import React, { useState, useContext } from "react";
import FlashCard from "./FlashCard";
import style from "./tile.module.css";
import { WordsContext } from "../Context/WordsContext";

export default function Tile() {
  const { items } = useContext(WordsContext);
  const [isEnglish, setisEnglish] = useState(true); // Управляет языком отображения

  // Обработчик переключения радио-кнопок
  const handleLanguageChange = (e) => {
    setisEnglish(e.target.value === "english");
  };
  return (
    <div>
      <form className={style.radioForm}>
        <label>
          <input
            type="radio"
            name="language"
            value="english"
            onChange={handleLanguageChange}
          />
          Show all ENGLISH
        </label>
        <label>
          <input
            type="radio"
            name="language"
            value="russian"
            onChange={handleLanguageChange}
          />
          Show all RUSSIAN
        </label>
      </form>
      <div className={style.wrapper__tile}>
        {items.map((card) => (
          <FlashCard key={card.id} {...card} isEnglish={isEnglish} />
        ))}
      </div>
    </div>
  );
}
