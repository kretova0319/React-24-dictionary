import React from "react";
import styles from "./button.module.css";

export default function Button({ text, color, handler, id, disabled }) {
  return (
    <button
      className={`${styles.btnTable} ${styles[color]}`}
      onClick={() => handler(id)}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
