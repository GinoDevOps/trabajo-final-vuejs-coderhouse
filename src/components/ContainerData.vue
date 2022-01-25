<template>
  <v-row style="margin: 0">
    <v-col
      cols="12"
      lg="3"
      class="d-flex mt-3 mb-3 align-center justify-center"
      v-for="(data, index) in data"
      :key="index"
    >
      <v-card
        class="d-flex flex-column align-center justify-center"
        width="400"
        style="box-shadow: none"
      >
        <v-img :src="data.imagen" width="150"></v-img>
        <v-card-title class="tituloData">{{ data.titulo }}</v-card-title>
        <v-divider class="divider mb-4"></v-divider>
        <h5 class="mx-auto">{{ data.descripcion }}</h5>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          imagen: require("../assets/clock.png"),
          titulo: "ENVÍO RÁPIDO",
          descripcion: "Te lo entregan en minutos ¡sin costos de envíos!",
        },
        {
          imagen: require("../assets/credit-card.png"),
          titulo: "ELEGÍ CÓMO PAGAR",
          descripcion: "Podés pagar con tarjeta, débito o efectivo",
        },
        {
          imagen: require("../assets/restaurante.png"),
          titulo: "LA MEJOR COMIDA",
          descripcion: "¡Gran variedad de platos gourmet y bebidas!",
        },
        {
          imagen: require("../assets/best-seller.png"),
          titulo: "LAS MEJORES CALIFICACIONES",
          descripcion: "Estamos detrás de cada pedido.",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
* {
  font-family: "Bebas Neue", cursive;
}

.tituloData {
  font-size: 28px;
}
.divider {
  border-width: 2px;
  border-color: red !important;
  height: 100%;
  width: 60px;
}
</style>
