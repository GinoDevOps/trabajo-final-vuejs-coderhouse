import axios from "axios";

export default {
  namespaced: true,
  state: {
    users: [],
    errores: [],
  },
  mutations: {
    USER_REGISTER(state, payload) {
      state.users = payload;
    },
    LOGIN_USER(state, payload) {
      state.users = payload;
    },
    ERRORS(state, payload) {
      state.errores = [];
      state.errores.push(payload);
    },
    NEW_ADDRESS(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    registroUsuario(context, dataRegister) {
      axios
        .post("https://61b1fcaec8d4640017aaf0ec.mockapi.io/users", dataRegister)
        .then(() => {
          context.commit("USER_REGISTER", dataRegister);
        });
    },
    loginUsers(context, dataUser) {
      axios
        .get("https://61b1fcaec8d4640017aaf0ec.mockapi.io/users", dataUser)
        .then((data) => {
          let user = false;
          for (let i = 0; i < data.data.length; i++) {
            if (
              dataUser.email === data.data[i].email &&
              dataUser.password === data.data[i].password
            ) {
              user = true;
              context.commit("LOGIN_USER", dataUser);
              localStorage.setItem("logueado", true);
              localStorage.setItem("name", data.data[i].name);
              localStorage.setItem("email", data.data[i].email);
              localStorage.setItem("direccion", data.data[i].direccion);
              localStorage.setItem("localidad", data.data[i].localidad);
              localStorage.setItem("provincia", data.data[i].provincia);
              localStorage.setItem("avatar", data.data[i].avatar);
            }
          }
          if (!user) {
            context.commit(
              "ERRORS",
              "Los datos ingresados son incorrectos o no se encuentra registrado"
            );
          }
        });
    },
  },
};
