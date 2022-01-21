<template>
  <v-app>
    <Navbar :logueado="login" />
    <Banner />
    <Carrousel />
    <v-divider></v-divider>
    <Productos />
    <v-divider></v-divider>
    <ContainerData />
    <v-divider></v-divider>
    <Foto />
    <v-divider></v-divider>
    <Mapa />
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./Navbar.vue";
import Banner from "./Banner.vue";
import ContainerData from "./ContainerData.vue";
import Carrousel from "./AtajosMenu.vue";
import Productos from "./ListadoProductos.vue";
import Footer from "./Footer.vue";
import Mapa from "./Mapa.vue";
import Foto from "./FotosFinal.vue";

export default {
  name: "Inicio",
  data() {
    return {
      login: true,
    };
  },
  components: {
    Navbar,
    ContainerData,
    Banner,
    Foto,
    Productos,
    Carrousel,
    Footer,
    Mapa,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
* {
  font-family: "Bebas Neue", cursive;
}
</style>
>
