import Vue from "vue";
import Vuex from "vuex";

import productos from "./modules/productos";
import users from "./modules/users";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    productos,
    users,
  },
});
