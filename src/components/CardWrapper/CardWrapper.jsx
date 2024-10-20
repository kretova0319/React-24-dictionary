import leftArrow from "../../Assets/left-arrow.svg";
import rihgtArrow from "../../Assets/right-arrow.svg";
import styles from "../Carusel/carusel.module.css";

export default function CardWrapper({
  children,
  showPreviousCard,
  showNextCard,
}) {
  return (
    <div className={styles.wrapper}>
      <button onClick={showPreviousCard} className={styles.arrow}>
        <img src={leftArrow} width="30px" alt="left arrow" />
      </button>
      {children}
      <button onClick={showNextCard} className={styles.arrow}>
        <img src={rihgtArrow} width="30px" alt="right arrow" />
      </button>
    </div>
  );
}
