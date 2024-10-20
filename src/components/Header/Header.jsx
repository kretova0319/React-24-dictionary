import { Link } from "react-router-dom";
import style from "./header.module.css";

function Header() {
  return (
    <header className={style.container__header}>
      <section className={style.wrapper__header}>
        <Link to="/table">
          <img
            className={style.logo}
            src="https://sstk.biz/images/studystacklogo.svg"
            alt="логотип сайта"
          ></img>
        </Link>

        <div className={style.links}>
          <Link to="/table">Table</Link>
          <Link to="/game">Game</Link>
          <Link to="/tile">Tile</Link>
          <Link to="/404">404</Link>
        </div>
      </section>
    </header>
  );
}

export default Header;
