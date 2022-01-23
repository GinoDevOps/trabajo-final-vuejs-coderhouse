<template>
  <v-app>
    <v-container class="mt-6">
      <Navbar />
    </v-container>
    <h1 class="tituloLogin">Ingresar</h1>
    <v-tabs centered class="mt-3">
      <v-tab style="font-size: 20px">Usuario</v-tab>
      <v-tab style="font-size: 20px">Admin</v-tab>
      <v-tab-item>
        <v-container>
          <LoginUser />
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container>
          <LoginAdmin />
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-app>
</template>

<script>
import Navbar from "./Navbar.vue";
import LoginUser from "./LoginUsuario.vue";
import LoginAdmin from "./LoginAdmin.vue";

export default {
  components: {
    Navbar,
    LoginUser,
    LoginAdmin,
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
  height: 300px;
  justify-content: center;
  align-items: center;
  font-size: 70px;
}
</style>
