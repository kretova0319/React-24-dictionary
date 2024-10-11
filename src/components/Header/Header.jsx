import "./Header.css";
function Header() {
  return (
    <header className="header">
      <section className="header__container">
        <img
          className="logo"
          src="https://sstk.biz/images/studystacklogo.svg"
          alt="логотип сайта"
        ></img>
        <div className="links">
          <a href="/">Search</a>
          <a href="/">Log in</a>
          <a href="/">Sign Up</a>
        </div>
      </section>
    </header>
  );
}

export default Header;
