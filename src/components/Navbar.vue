<template>
  <div>
    <v-app-bar denseclipped-left flat fixed>
      <div v-if="$vuetify.breakpoint.xsOnly">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </div>
      <div v-else class="infoLg">
        <div v-if="logueado">
          <router-link
            to="/login"
            style="text-decoration: none; color: white"
            class="ml-2"
          >
            <v-btn icon style="color: black">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </router-link>
        </div>
        <div v-else class="d-flex align-center">
          <v-btn
            @click="logOut()"
            x-small
            color="error"
            style="border-radius: 15px"
            class="zoom"
            >Cerrar Sesion</v-btn
          >
          <router-link
            to="/datos"
            style="text-decoration: none; color: black"
            width="100%"
          >
            <v-list-item class="d-flex align-center">
              <v-list-item-title width="100%" style="font-size: 22px"
                >{{ nameLogin() }}
              </v-list-item-title>
            </v-list-item>
          </router-link>
        </div>
      </div>

      <v-spacer></v-spacer>

      <router-link to="/" style="text-decoration: none; color: black">
        <v-toolbar-title style="font-size: 30px "
          >the food truck</v-toolbar-title
        >
      </router-link>

      <v-spacer></v-spacer>
      <router-link
        to="/carrito"
        style="text-decoration: none; color: white"
        class="ml-2"
      >
        <v-btn icon style="color: black">
          <v-icon>mdi-cart </v-icon> {{ cart }}
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      left
      temporary
      app
      clipped
      flat
      height="100vh"
      width="50%"
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link
            to="/login"
            style="text-decoration: none; color: black"
            v-if="logueado"
          >
            <v-list-item style="color: black">
              <v-list-item-title width="100%">
                Perfil
              </v-list-item-title></v-list-item
            >
          </router-link>

          <div v-else>
            <v-list-item-title class="d-flex justify-center"
              >bienvenido {{ nameLogin() }}</v-list-item-title
            >

            <router-link
              to="/datos"
              style="text-decoration: none; color: black"
              width="100%"
            >
              <v-list-item>
                <v-list-item-title width="100%"> Tu perfil </v-list-item-title>
              </v-list-item>
            </router-link>
          </div>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <v-list-item v-if="logueado" width="100%">
          <router-link
            to="/login"
            width="100%"
            style="text-decoration: none; color: white"
            class="mx-auto"
          >
            <v-btn
              block
              @click="this.$router.push('/')"
              color="error"
              style="border-radius: 15px"
              class="zoom"
            >
              Iniciar sesión
            </v-btn>
          </router-link>
        </v-list-item>

        <div class="pa-2" v-else>
          <v-btn
            block
            @click="logOut()"
            color="error"
            style="border-radius: 15px"
            class="zoom"
            >Cerrar Sesion</v-btn
          >
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { list } from "cart-localstorage";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      logueado: true,
      drawer: false,
      group: null,
    };
  },
  methods: {
    loginStatus() {
      if (localStorage.logueado === "true") {
        this.logueado = false;
      }
    },
    nameLogin() {
      return localStorage.name;
    },
   
    logOut() {
      if (localStorage.logueado === "true") {
        Swal.fire({
          title: "¿Quieres cerrar sesión?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "rgb(129, 207, 129)",
          cancelButtonColor: "rgb(175,91,91)",
          confirmButtonText: "¡Si!",
          cancelButtonText: "¡No!",
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.clear();
            this.$router.push("/");
            location.reload();
          }
        });
      }
    },
  },
  computed: {
    cart() {
      return list().length;
    },
  },
  mounted() {
    this.loginStatus();
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
* {
  font-family: "Bebas Neue", cursive;
}
.infoLg {
  width: 0;
}
</style>
