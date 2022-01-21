<template>
  <v-app>
    <h1 class="tituloUsuario">Perfil</h1>
    <v-container width="100vh">
      <v-img :src="avatar()" class="image mx-auto"></v-img>
      <h1 style="text-align: center" class="mt-3">{{ nameLogin() }}</h1>
    </v-container>

    <v-container>
      <v-row>
        <template>
          <v-col cols="12"  class="d-flex align-center justify-center">
            <v-card width="800px" shaped>
              <v-img
                class="white--text align-end"
                height="100px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Datos personales</v-card-title>
              </v-img>
              <v-card-title style="font-size: 20px"> Nombre</v-card-title>
              <v-card-text style="font-size: 17px">{{
                nameLogin()
              }}</v-card-text>
              <v-card-title style="font-size: 20px"> Email</v-card-title>
              <v-card-text style="font-size: 17px">{{
                correoLogin()
              }}</v-card-text>
             
              <v-card-title style="font-size: 20px">
                Dirección para envios</v-card-title
              >
              <v-card-text style="font-size: 17px">{{ direcc() }}</v-card-text>
               <v-card-title style="font-size: 20px">
                Localidad</v-card-title
              >
              <v-card-text style="font-size: 17px">{{ localidad() }}</v-card-text>
               <v-card-title style="font-size: 20px">
                Provincia</v-card-title
              >
              <v-card-text style="font-size: 17px">{{ provincia() }}</v-card-text>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      nuevoIndex: -1,
    };
  },
  methods: {
    avatar() {
      return localStorage.avatar;
    },
    nameLogin() {
      return localStorage.name;
    },
    correoLogin() {
      return localStorage.email;
    },
      direcc() {
        return localStorage.direccion;
      },
       localidad() {
        return localStorage.localidad;
      },
       provincia() {
        return localStorage.provincia;
      },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.nuevoIndex = -1;
      });
    },
  },
  computed: {},
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
};
</script>

<style scoped>
.tituloUsuario {
  background: url("../assets/bg-image-cart.jpg");
  color: white;
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
  font-size: 70px;
}
.image {
  height: 200px;
  width: 200px;
  background-repeat: no-repeat;
  background-position: 100%;
  border-radius: 100%;
  background-size: 100% auto;
}
</style>