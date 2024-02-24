import css from "./Header.module.css";
import logoIcon from "../../svg/wine_sgl66wl5hhhe.svg";

function Header() {
  return (
    <header className={css.header}>
      <a className={css.logo} href="./">
        <img src={logoIcon} alt="logo" width="40" />
      </a>
      <nav className={css.navigation}>
        <a className={css.navigationItem} href="./">
          Home
        </a>
        <a
          className={css.navigationItem}
          target="blanc"
          href="https://therapsodia.com/"
        >
          Rapsodia
        </a>
      </nav>
    </header>
  );
}

export default Header;
