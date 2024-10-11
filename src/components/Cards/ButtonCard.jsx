import React from "react";
import styles from "./buttonCard.module.css";

export default function ButtonCard({ onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      Проверить
    </button>
  );
}
