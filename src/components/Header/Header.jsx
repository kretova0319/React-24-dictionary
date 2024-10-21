import { NavLink } from "react-router-dom";
import style from "./header.module.css";

function Header() {
  return (
    <header className={style.container__header}>
      <section className={style.wrapper__header}>
        <NavLink end to="/table">
          <img
            className={style.logo}
            src="https://sstk.biz/images/studystacklogo.svg"
            alt="логотип сайта"
          ></img>
        </NavLink>

        <div className={style.links}>
          <NavLink end to="/table">
            Table
          </NavLink>
          <NavLink end to="/game">
            Game
          </NavLink>
          <NavLink end to="/tile">
            Tile
          </NavLink>
        </div>
      </section>
    </header>
  );
}

export default Header;
