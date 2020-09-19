export function cardCount(state) {
  return state.cart.length;
}

export function totalPrize(state) {
  let total = 0;
  state.cart.map(item => {
    total += item.product.prize * item.quantity;
  });
  return total;
}
