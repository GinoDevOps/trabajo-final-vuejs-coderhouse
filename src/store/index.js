import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import carrito from "./modules/carrito";
import productos from "./modules/productos";

Vue.use(Vuex);
Vue.use("axios");

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    LOGIN_USER(state, payload) {
      state.users = payload;
    },
    USER_REGISTER(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    loginUsers(context, dataUser) {
      axios
        .get("https://61b1fcaec8d4640017aaf0ec.mockapi.io/users", dataUser)
        .then(() => {
          context.commit("LOGIN_USER", dataUser);
        });
    },

    registroUsuario(context, dataRegister) {
      axios
        .post("https://61b1fcaec8d4640017aaf0ec.mockapi.io/users", dataRegister)
        .then(() => {
          context.commit("USER_REGISTER", dataRegister);
        });
    },
  },
  modules: {
    carrito,
    productos,
  },
});
