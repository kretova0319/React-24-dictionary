import React from "react";
import style from "./error.module.css";

export default function Error() {
  return (
    <div className={style.error}>
      <p className={style.error__number}>404</p>
      <p className={style.error__text}>This page doesn't exist</p>
    </div>
  );
}
