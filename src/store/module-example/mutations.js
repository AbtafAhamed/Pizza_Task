export function ADD_TO_CART(state, { product, quantity }) {
  let productCart = state.cart.find(item => {
    return item.product.id === product.id;
  });
  if (productCart) {
    productCart.quantity += quantity;
    return;
  }
  state.cart.push({
    product,
    quantity
  });
}
export function CHANGE_STATUS(state) {
  state.count += 1;
}
export function RESET_STATUS(state) {
  if (state.count > 2) {
    state.count = 0;
  }
}

export function LOGOUT_STATUS(state) {
  state.count = 0;
  state.cart = [];
}
