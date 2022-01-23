<template>
  <v-container fill-height fluid>
    <v-container align-center class="mt-n9">
      <v-layout>
        <v-flex>
          <v-card>
            <v-card-text>
              <v-form ref="form" v-model="form" class="pa-4 pt-6">
                <v-container
                  v-for="(error, i) in this.errores"
                  :key="i"
                  style="color: red"
                >
                  <h4 style="text-align: center">{{ error }}</h4>
                </v-container>

                <v-text-field
                  :rules="[rules.email]"
                  @keyup="lowerCase"
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
              <p class="ml-5" style="font-size: 14px">
                ¿No tiene una cuenta? Regístrese
                <router-link to="/registro"> aqui </router-link>
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
                @click="userLogin(usuarioLogin)"
                >Ingresar</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

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
  computed: {
    ...mapState("users", ["errores"]),
  },
  methods: {
    ...mapActions("users", ["loginUsers"]),

    userLogin(dataUsuario) {
      this.loginUsers(dataUsuario);
    },
    lowerCase() {
      this.usuarioLogin.email = this.usuarioLogin.email.toLowerCase();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
* {
  font-family: "Bebas Neue", cursive;
}

</style>