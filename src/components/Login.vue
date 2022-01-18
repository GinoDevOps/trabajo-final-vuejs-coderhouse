<template>
  <v-app>
    <v-container  class="mt-6">
      <Navbar />
    </v-container>
    <h1 class="tituloLogin">Ingresar</h1>
    <v-container fill-height fluid>
      <v-container align-center class="mt-n9">
        <v-layout>
          <v-flex>
            <v-card>
              <v-card-text>
                <v-form ref="form" v-model="form" class="pa-4 pt-6">
                  <v-text-field
                    :rules="[rules.email]"
                    filled
                    v-model="usuarioLogin.email"
                    name="email"
                    label="Email"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    filled
                    :rules="[rules.password]"
                    v-model="usuarioLogin.password"
                    name="password"
                    label="Contraseña"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <p class="ml-6 mt-n16">
                  ¿No tiene una cuenta? Regístrese
                  <router-link to="/registro"> aqui </router-link>
                </p>
                <v-spacer></v-spacer>
                <v-btn
              x-large
                  :disabled="!form"
                  :loading="isLoading"
                  class="white--text mr-6"
                  color="blue accent-4"
                   style="border-radius: 15px"
                  depressedcolor="primary"
                  @click="loginUsers(usuarioLogin)"
                  >Ingresar</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  data() {
    return {
      form: false,
      isLoading: false,
      rules: {
        email: (v) => !!(v || "").match(/@/) || "Ingresa un mail valido",
        password: (v) =>
          (v || "").length >= 8 || `Ingresa una contraseña valida`,
      },
      usuarioLogin: {
        email: "",
        password: "",
      },
    };
  },
  components: {
    Navbar,
  },
  methods: {
    loginUsers(dataUser) {
      this.$store.dispatch("loginUsers", dataUser);
      this.$router.push("/");
    },
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
  height:200px;
  justify-content: center;
  align-items: center;
  font-size: 70px;
}
</style>
