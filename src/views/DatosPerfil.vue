<template>
  <v-app>
    <Navbar />
    <v-container> </v-container>
    <Datos />
  </v-app>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Datos from "@/components/DatosUsuario.vue";

export default {
  name: "datos",
  components: {
    Datos,
    Navbar,
  },
};
</script>
