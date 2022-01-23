import axios from "axios";

export default {
  namespaced: true,
  state: {
    productos: [],
  },
  mutations: {
    MOSTRAR_PRODUCTOS(state, payload) {
      state.productos = payload;
    },
    AGREGAR_PRODUCTO_ADMIN(state, payload) {
      state.productos.push(payload);
    },
    ELIMINAR_PRODUCTO_ADMIN(state, id) {
      state.productos.splice(id, 1);
    },
  },
  actions: {
    mostrarProductos(context) {
      axios
        .get("https://61b1fcaec8d4640017aaf0ec.mockapi.io/products")
        .then((data) => {
          context.commit("MOSTRAR_PRODUCTOS", data.data);
        });
    },
    agregarProductoAdmin(context, dataProduct) {
      axios
        .post(
          "https://61b1fcaec8d4640017aaf0ec.mockapi.io/products",
          dataProduct
        )
        .then(() => {
          context.commit("AGREGAR_PRODUCTO_ADMIN");
          context.dispatch("mostrarProductos");
        });
    },
    eliminarProductoAdmin(context, id) {
      axios
        .delete(`https://61b1fcaec8d4640017aaf0ec.mockapi.io/products/${id}`)
        .then(() => {
          context.commit("ELIMINAR_PRODUCTO_ADMIN", id);
          context.dispatch("mostrarProductos");
        });
    },
  },
};
