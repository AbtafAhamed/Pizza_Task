import { Cookies } from "quasar";
export function AddToCart({ commit }, { product, quantity }) {
  commit("ADD_TO_CART", { product, quantity });
}

export function statusChange({ commit }) {
  commit("CHANGE_STATUS");
}
export function resetStatus({ commit }) {
  commit("RESET_STATUS");
}

export function logout({ commit }) {
  Cookies.remove("user");
  this.$router.push("/");
  commit("LOGOUT_STATUS");
}
