import style from "./Navigation.module.css";
import { Container } from "../Container/Container";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCategory,
  categoryRequestAsync,
} from "../../store/category/categorySlice";
import { useEffect } from "react";
import { API_URI } from "../../const";

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryRequestAsync("max"));
  }, []);

  return (
    <nav className={style.navigation}>
      <Container className={style.container}>
        <ul className={style.list}>
          {category.map((item, i) => (
            <li className={style.item} key={item.title}>
              <button
                className={classNames(
                  style.button,
                  activeCategory === i ? style.button_active : ""
                )}
                style={{ backgroundImage: `url(${API_URI}/${item.image})` }}
                onClick={() => {
                  dispatch(changeCategory({ indexCategory: i }));
                }}
              >
                {item.rus}
              </button>
            </li>
          ))}

          {/* <li className={classNames(style.item)}>
            <button className={classNames(style.button, style.button_snack)}>
              Закуски
            </button>
          </li>
          <li className={classNames(style.item)}>
            <button className={classNames(style.button, style.button_hotdog)}>
              Хот-доги
            </button>
          </li>
          <li className={classNames(style.item)}>
            <button className={classNames(style.button, style.button_combo)}>
              Комбо
            </button>
          </li>
          <li className={classNames(style.item)}>
            <button className={classNames(style.button, style.button_shawarma)}>
              Шаурма
            </button>
          </li>
          <li className={classNames(style.item)}>
            <button className={classNames(style.button, style.button_pizza)}>
              Пицца
            </button>
          </li>
          <li className={classNames(style.item)}>
            <button className={classNames(style.button, style.button_wok)}>
              Вок
            </button>
          </li>
          <li className={classNames(style.item)}>
            <button className={classNames(style.button, style.button_dessert)}>
              Десерты
            </button>
          </li>
          <li className={style.item}>
            <button className={classNames(style.button, style.button_sauce)}>
              Соусы
            </button>
          </li> */}
        </ul>
      </Container>
    </nav>
  );
};
