import { useState } from "react";
import "./Cards.css";
import ButtonCard from "./ButtonCard";
import TranslateCard from "./TranslateCard";

export default function Cards({ englishWord, transcription, russianWord }) {
  const [isClicked, setIsClicked] = useState(false);

  const check = () => {
    setIsClicked(true);
  };
  return (
    <div className="card">
      <div className="card__main">
        <p className="word">{englishWord}</p>
        <p className="trans">{transcription}</p>
      </div>
      <div>
        {isClicked ? (
          <TranslateCard translation={russianWord} />
        ) : (
          <ButtonCard onClick={check} />
        )}
      </div>
    </div>
  );
}
