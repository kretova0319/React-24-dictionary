import React from "react";
import styles from "./button.module.css";

export default function Button({ text, color, handleDelet, id }) {
  return (
    <button
      className={`${styles.btnTable} ${styles[color]}`}
      onClick={() => handleDelet(id)}
    >
      {text}
    </button>
  );
}
