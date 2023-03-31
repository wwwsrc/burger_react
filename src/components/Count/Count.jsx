import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../store/order/orderSlice";
import style from "./Count.module.css";

export const Count = ({ count, id }) => {
  // const [count, setCount] = useState(props.count);
  const dispatch = useDispatch();

  const addCount = () => {
    dispatch(addProduct({ id }));
  };

  const removeCount = () => {
    dispatch(removeProduct({ id }));
  };

  return (
    <div className={style.count}>
      <button className={style.minus} onClick={removeCount}>
        -
      </button>
      <p className={style.amount}>{count}</p>
      <button className={style.plus} onClick={addCount}>
        +
      </button>
    </div>
  );
};
