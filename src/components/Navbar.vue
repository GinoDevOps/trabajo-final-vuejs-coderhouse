<template>
  <v-app-bar flat color="white" fixed class="navbar">
    <v-container class="d-flex">
      <router-link to="/" style="text-decoration: none">
        <v-img :src="require('../assets/logo-navbar.jpg')" width="200"></v-img>
      </router-link>
      <v-spacer></v-spacer><v-spacer></v-spacer>
      <v-container></v-container>
      <router-link
        to="/login"
        style="text-decoration: none; color: white"
        class="ml-2"
      >
        <v-btn icon style="color: black">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </router-link>

      <router-link
        to="/carrito"
        style="text-decoration: none; color: white"
        class="ml-2"
      >
        <v-btn icon style="color: black">
          <v-icon>mdi-cart </v-icon> {{ cart }}
        </v-btn>
      </router-link>
    </v-container>
  </v-app-bar>
</template>


<script>
import { list } from "cart-localstorage";

export default {
  props: {
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    cart() {
      return list().length;
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
