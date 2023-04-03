import style from "./Order.module.css";
import { OrderGoods } from "../OrderGoods/OrderGoods";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { orderRequestAsync } from "../../store/order/orderSlice";
import { openModal } from "../../store/modalDelivery/modalDeliverySlice";

// const orderList = ["Товар 1", "Товар 2", "Товар 3", "Gnilushka"];

export const Order = () => {
  const { totalPrice, totalCount, orderList, orderGoods } = useSelector(
    (state) => state.order
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(orderRequestAsync());
  }, [orderList.length]);

  return (
    <div className={style.order}>
      <section className={style.wrapper}>
        <div className={style.header} tabIndex="0" role="button">
          <h2 className={style.title}>Корзина</h2>
          <span className={style.count}>{totalCount}</span>
        </div>

        <div className={style.wrap_list}>
          <ul className={style.list}>
            {orderGoods.map((item) => (
              <OrderGoods key={item.id} {...item} />
            ))}
          </ul>

          <div className={style.total}>
            <p>Итого</p>
            <p>
              <span className={style.amount}>{totalPrice}&nbsp;</span>
              <span className={style.currency}>₽</span>
            </p>
          </div>

          <button
            className={style.submit}
            disabled={orderGoods.length === 0}
            onClick={() => dispatch(openModal())}
          >
            Оформить заказ
          </button>

          <div className={style.apeal}>
            <p className={style.text}>Бесплатная доставка</p>
            <button className={style.close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  );
};
