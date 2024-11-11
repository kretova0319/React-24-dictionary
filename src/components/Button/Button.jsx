import React from "react";
import styles from "./button.module.css";

export default function Button({ text, color, onClick, id }) {
  return (
    <button
      className={`${styles.btnTable} ${styles[color]}`}
      onClick={() => onClick(id)}
    >
      {text}
    </button>
  );
}
