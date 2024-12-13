import React, { useState, useEffect, useRef } from "react";
import styles from "./buttonCard.module.css";

export default function ButtonCard({ onClick }) {
  const [isFocused, setIsFocused] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus(); // Устанавливаем фокус на кнопку при монтировании
    setIsFocused(true); //при монтировании кропка увеличивается в размере
  }, []);

  return (
    <button
      ref={buttonRef}
      className={isFocused ? styles.btnfocused : styles.btn}
      onClick={onClick}
    >
      Проверить
    </button>
  );
}
