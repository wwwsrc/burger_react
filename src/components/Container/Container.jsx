import style from "./Container.module.css";
import classNames from "classnames";

export const Container = ({ className }) => (
  <div className={classNames(style.container, className)}></div>
);
