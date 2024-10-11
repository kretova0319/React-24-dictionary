import React from "react";
import styles from "./translateCard.module.css";

export default function TranslateCard({ translation }) {
  return <div className={styles.trans}>{translation}</div>;
}
