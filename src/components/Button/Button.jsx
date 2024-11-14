import React from "react";
import styles from "./button.module.css";

export default function Button({ text, color, handler, id }) {
  return (
    <button
      className={`${styles.btnTable} ${styles[color]}`}
      onClick={() => handler(id)}
    >
      {text}
    </button>
  );
}
