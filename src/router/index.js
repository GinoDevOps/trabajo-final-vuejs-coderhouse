import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/carrito",
    name: "Carrito",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Carrito.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/registro",
    name: "Registro",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Registro.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Admin.vue"),
  },
  {
    path: "/menu",
    name: "Menu",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Menu.vue"),
  },
  {
    path: "/datos",
    name: "Datos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DatosPerfil.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
