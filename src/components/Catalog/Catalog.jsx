import { Container } from "../Container/Container";
import { Order } from "../Order/Order";
import style from "./Catalog.module.css";

export const Catalog = () => {
  return (
    <section className="catalog">
      <Container className="catalog__container">
        <Order />
        <div className="catalog__wrapper">
          <h2 className="catalog__title">Бургеры</h2>

          <div className="catalog__wrap_list">
            <ul className="catalog__list">
              <li className="catalog__item"></li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
