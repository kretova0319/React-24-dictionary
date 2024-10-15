import "./Cards.css";
import ButtonCard from "./ButtonCard";
import TranslateCard from "./TranslateCard";

export default function Cards({
  englishWord,
  transcription,
  russianWord,
  pressed,
  handleClick,
}) {
  return (
    <div className="card">
      <div className="card__main">
        <p className="word">{englishWord}</p>
        <p className="trans">{transcription}</p>
      </div>
      <div>
        {pressed ? (
          <TranslateCard translation={russianWord} />
        ) : (
          <ButtonCard onClick={handleClick} />
        )}
      </div>
    </div>
  );
}
