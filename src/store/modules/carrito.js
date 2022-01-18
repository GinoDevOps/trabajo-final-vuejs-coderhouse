import axios from "axios";
export default {
  namespaced: true,
  state: {
    carrito: [],
  },
  mutations: {
    MOSTRAR_CARRITO(state, payload) {
      state.carrito = payload;
    },
    ELIMINAR_PRODUCTO_CARRITO(state, id) {
      state.carrito.splice(id, 1);
    },
    AGREGAR_PRODUCTO_CARRITO(state, payload) {
      state.carrito.push(payload);
    },
  },
  actions: {
    mostrarCarrito(context) {
      axios
        .get("https://61b1fcaec8d4640017aaf0ec.mockapi.io/carrito")
        .then((data) => {
          context.commit("MOSTRAR_CARRITO", data.data);
        });
    },
    eliminarProductoCarrito(context, id) {
      axios
        .delete(`https://61b1fcaec8d4640017aaf0ec.mockapi.io/carrito/${id}`)
        .then(() => {
          context.commit("ELIMINAR_PRODUCTO_CARRITO", id);
          context.dispatch("mostrarCarrito");
        });
    },
    agregarProductoCarrito(context, producto) {
      (producto.quantity = 1),
        axios
          .post("https://61b1fcaec8d4640017aaf0ec.mockapi.io/carrito", producto)
          .then(() => {
            context.commit("AGREGAR_PRODUCTO_CARRITO", producto);
          });
    },
  },
  getters: {
    productosEnCarrito: (state) => {
      return state.carrito.length;
    },
  },
};
