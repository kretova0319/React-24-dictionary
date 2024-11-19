import React, { useState, useEffect } from "react";
import FlashCard from "./FlashCard";
import style from "./tile.module.css";

export default function Tile() {
  const [isEnglish, setisEnglish] = useState(true);

  const showEnglish = () => {
    setisEnglish(isEnglish);
  };

  const showRussian = () => {
    setisEnglish(!isEnglish);
  };

  // Получаем с API список слов, загружаем на страницу
  const [words, setWords] = useState([]);
  useEffect(() => {
    getWords();
  }, []);
  const getWords = async () => {
    const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
    const datatWords = await response.json();
    console.log(datatWords);
    setWords(datatWords);
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
        {words.map((card) => (
          <FlashCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
