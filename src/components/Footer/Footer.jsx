import style from "./footer.module.css";
function Footer() {
  return (
    <footer className={style.container__footer}>
      <img
        className={style.logo}
        src="https://cdn-icons-png.flaticon.com/128/4459/4459205.png"
        alt="логотип сайта"
      ></img>
    </footer>
  );
}
export default Footer;
