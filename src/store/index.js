import Vue from "vue";
import Vuex from "vuex";
import Router from "../router";

import productos from "./modules/productos";
import users from "./modules/users";

Vue.use(Vuex);
Vue.use(Router);
let cart = window.localStorage.getItem("cart");

export default new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) : [],
  },
  mutations: {
    addToCart(state, item) {
      let found = state.cart.find((product) => product.id == item.id);
      if (found) {
        found.quantity++;
        found.totalPrice = found.quantity * found.price;
      } else {
        state.cart.push(item);
        Vue.set(item, "quantity", 1);
        Vue.set(item, "totalPrice", item.price);
      }
      this.commit("saveCart");
    },
    removeFromCart(state, item) {
      let index = state.cart.indexOf(item);
      if (index > -1) {
        state.cart.splice(index, 1);
      }
      this.commit("saveCart");
    },
    clearCart(state) {
      state.cart = [];
      this.commit("saveCart");
    },
    saveCart(state) {
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
  modules: {
    productos,
    users,
  },
});
