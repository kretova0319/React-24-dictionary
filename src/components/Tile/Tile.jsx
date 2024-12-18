import React, { useState, useEffect } from "react";
import FlashCard from "./FlashCard";
import style from "./tile.module.css";
import { useStore } from "../../Store/TaskStoreContext";
import { observer } from "mobx-react-lite";

const Tile = observer(() => {
  const { taskStore } = useStore();
  const [isEnglish, setisEnglish] = useState(true); // Управляет языком отображения

  useEffect(() => {
    taskStore.loadData();
  }, [taskStore]);

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
            checked={isEnglish}
            onChange={handleLanguageChange}
          />
          Show all ENGLISH
        </label>
        <label>
          <input
            type="radio"
            name="language"
            value="russian"
            checked={!isEnglish}
            onChange={handleLanguageChange}
          />
          Show all RUSSIAN
        </label>
      </form>
      <div className={style.wrapper__tile}>
        {taskStore.words.map((card) => (
          <FlashCard key={card.id} {...card} isEnglish={isEnglish} />
        ))}
      </div>
    </div>
  );
});
export default Tile;
