import Vue from "vue";
import Vuex from "vuex";
import Router from "../router";

import productos from "./modules/productos";
import users from "./modules/users";

Vue.use(Vuex);
Vue.use(Router);

  export default new Vuex.Store({
  modules: {
    productos,
    users,
  },
});
