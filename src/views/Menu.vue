<template>
  <v-app>
    <Navbar />
    <Menu class="mt-8" />
    <Footer />
  </v-app>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Menu from "@/components/ListadoProductos.vue";

export default {
  name: "carrito",
  components: {
    Navbar,
    Menu,
    Footer,
  },
};
</script>
