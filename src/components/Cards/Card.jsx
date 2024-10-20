import style from "./card.module.css";
import ButtonCard from "./ButtonCard";
import TranslateCard from "./TranslateCard";

export default function Card({
  english,
  transcription,
  russian,
  pressed,
  handleClick,
}) {
  return (
    <div className={style.card}>
      <div className={style.card__main}>
        <p className={style.word}>{english}</p>
        <p className={style.trans}>{transcription}</p>
      </div>
      <div>
        {pressed ? (
          <TranslateCard translation={russian} />
        ) : (
          <ButtonCard onClick={handleClick} />
        )}
      </div>
    </div>
  );
}
