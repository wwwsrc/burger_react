import { Count } from "../Count/Count";
import style from "./OrderGoods.module.css";

const testovua = "klara";

export const OrderGoods = ({ i, title }) => {
  return (
    <li className={style.item}>
      <img className={style.image} src="img/burger_1.jpg" alt={title} />

      <div className="goods">
        <h3 className={style.title}>{title}</h3>

        <p className={style.weight}>512г</p>

        <p className={style.price}>
          1279
          <span className="currency">₽</span>
        </p>
      </div>

      <Count count={1} />
    </li>
  );
};
