import React, { useState, useEffect } from "react";
import styles from "./buttonCard.module.css";

export default function ButtonCard({ onClick }) {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setIsFocused(true);
  }, []);

  return (
    <button
      className={isFocused ? styles.btnfocused : styles.btn}
      onClick={onClick}
    >
      Проверить
    </button>
  );
}
