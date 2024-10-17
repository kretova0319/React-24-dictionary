import React from "react";
import styles from "./button.module.css";

export default function Button({ text, color, onClick }) {
  return (
    <button className={`${styles.btnTable} ${styles[color]}`} onClick={onClick}>
      {text}
    </button>
  );
}
