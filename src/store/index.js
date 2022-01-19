import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
//import router from "../router";

import productos from "./modules/productos";

Vue.use(Vuex);
Vue.use("axios");
//Vue.use("router");
export default new Vuex.Store({
  state: {
    users: [],
   
  },
  mutations: {
    USER_REGISTER(state, payload) {
      state.users = payload;
    },
   
  },
  actions: {
    registroUsuario(context, dataRegister) {
      axios
        .post("https://61b1fcaec8d4640017aaf0ec.mockapi.io/users", dataRegister)
        .then((data) => {
          context.commit("USER_REGISTER", dataRegister);
          if (data.status === 201) {
            localStorage.setItem("token", data.data.jwt);
            localStorage.setItem("email", dataRegister.email);
            localStorage.setItem("password", dataRegister.password);
          }
        });
    },

  },
  modules: {
    productos,
  },
});
