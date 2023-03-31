const calcCount = (orderGoods) =>
  orderGoods.reduce((acc, item) => item.count + acc, 0);
const calcTotalPrice = (orderGoods) =>
  orderGoods.reduce((acc, item) => item.count * item.price + acc, 0);

export { calcCount, calcTotalPrice };
