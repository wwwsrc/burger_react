import style from "./Header.module.css";
import logo from "../../assets/img/logo.svg";
import { Container } from "../Container/Container.jsx";
import classNames from "classnames";

export const Header = () => (
  <header className={style.header}>
    <Container>
      <div className={style.container}>
        <a href="/">
          <img className={style.logo} src={logo} alt="Логотип YourMeal" />
        </a>

        <div className={style.wrapper}>
          <h1 className={style.title}>
            <span>Только самые</span>
            <span className={style.red}>сочные бургеры!</span>
          </h1>

          <p className={style.appeal}>Бесплатная доставка от 599₽</p>
        </div>
      </div>
    </Container>
  </header>
);
