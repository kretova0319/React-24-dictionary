import style from "./footer.module.css";
function Footer() {
  return (
    <footer className={style.container__footer}>
      <img
        className={style.logo}
        src="https://sstk.biz/images/studystacklogo.svg"
        alt="логотип сайта"
      ></img>
    </footer>
  );
}
export default Footer;
