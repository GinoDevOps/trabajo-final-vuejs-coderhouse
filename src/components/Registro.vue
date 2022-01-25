<template>
  <v-app>
    <v-container class="mt-6">
      <Navbar />
    </v-container>
    <h1 class="tituloLogin">Registrarse</h1>
    <v-container fill-height fluid>
      <v-container align-center class="mt-n9">
        <v-layout>
          <v-flex>
            <v-card>
              <v-card-text>
                <v-form ref="form" v-model="form" class="pa-4 pt-6">
                  <v-text-field
                    @keyup="lowerCase"
                    v-model="usuarioCreado.name"
                    filled
                    color="deep-purple"
                    label="Nombre"
                    type="name"
                  ></v-text-field>
                  <v-text-field
                    @keyup="lowerCase"
                    v-model="usuarioCreado.email"
                    :rules="[rules.email]"
                    filled
                    color="deep-purple"
                    label="Email"
                    type="email"
                  ></v-text-field>
                  <v-text-field
                    @keyup="lowerCase"
                    v-model="usuarioCreado.direccion"
                    filled
                    color="deep-purple"
                    label="Dirección para envios"
                    type="direccion"
                  ></v-text-field>
                  <div v-if="$vuetify.breakpoint.xsOnly">
                    <v-text-field
                      @keyup="lowerCase"
                      color="deep-purple"
                      v-model="usuarioCreado.localidad"
                      filled
                      label="Localidad"
                    ></v-text-field>
                    <v-text-field
                      @keyup="lowerCase"
                      color="deep-purple"
                      v-model="usuarioCreado.provincia"
                      filled
                      label="Provincia"
                    ></v-text-field>
                  </div>
                  <v-container class="d-flex" v-else>
                    <v-col cols="6">
                      <v-text-field
                        @keyup="lowerCase"
                        color="deep-purple"
                        v-model="usuarioCreado.localidad"
                        filled
                        label="Localidad"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        @keyup="lowerCase"
                        color="deep-purple"
                        v-model="usuarioCreado.provincia"
                        filled
                        label="Provincia"
                      ></v-text-field>
                    </v-col>
                  </v-container>

                  <v-text-field
                    v-model="usuarioCreado.password"
                    :rules="[rules.password, rules.length(8)]"
                    filled
                    color="deep-purple"
                    label="Contraseña"
                    style="min-height: 96px"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <p class="ml-5" style="font-size: 14px">
                  ¿Ya tienes cuenta? Inicie sesion
                  <router-link to="/login"> aqui </router-link>
                </p>
                <v-spacer></v-spacer>
                <v-btn
                  large
                  :disabled="!form"
                  :loading="isLoading"
                  class="white--text mr-6"
                  color="blue accent-4"
                  style="border-radius: 15px"
                  depressedcolor="primary"
                  @click="userRegister(usuarioCreado)"
                >
                  Registrarse
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-alert
              v-if="alerta"
              border="right"
              color="green"
              dismissible
              elevation="4"
              prominent
              shaped
              type="success"
              class="mt-5"
            >
              Usuario creado con exito! Inicie sesion para continuar</v-alert
            >
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "./Navbar.vue";
import { mapActions } from "vuex";

export default {
  data: () => ({
    alerta: false,
    form: false,
    isLoading: false,
    rules: {
      email: (v) => !!(v || "").match(/@/) || "Ingresa un mail valido",
      length: (len) => (v) =>
        (v || "").length >= len ||
        `Contraseña muy corta, minimo ${len} caracteres`,
      password: (v) =>
        !!(v || "").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/) ||
        "La contraseña debe contener una mayuscula, un numero",
      required: (v) => !!v || "Este campo es requerido",
    },
    usuarioCreado: {
      name: "",
      email: "",
      password: "",
      direccion: "",
      localidad: "",
      provincia: "",
    },
  }),
  methods: {
    ...mapActions("users", ["registroUsuario"]),

    userRegister(dataRegister) {
      this.alerta = true;
      this.registroUsuario(dataRegister);
      setTimeout(() => {
        this.alerta = false;
      }, 4000);
    },
    lowerCase() {
      this.usuarioCreado.email = this.usuarioCreado.email.toLowerCase();
    },
  },
  components: {
    Navbar,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
* {
  font-family: "Bebas Neue", cursive;
}
.tituloLogin {
  background: url("../assets/bg-image-cart.jpg");
  color: white;
  display: flex;
  height: 400px;
  justify-content: center;
  align-items: center;
  font-size: 70px;
}
</style>
