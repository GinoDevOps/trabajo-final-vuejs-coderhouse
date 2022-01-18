<template>
  <v-app>
    <h1 class="fontTitulo">NUESTRO MENÚ</h1>
    <v-container>
      <v-tabs centered class="mt-3">
        <v-tab style="font-size: 20px">Burgers</v-tab>
        <v-tab style="font-size: 20px">Pizzas</v-tab>
        <v-tab style="font-size: 20px">Bebidas</v-tab>
        <v-tab-item>
          <v-container>
            <Hamburguesas />
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container>
            <Pizzas />
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container>
            <Bebidas />
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </v-app>
</template>

<script>
import Hamburguesas from "./FilterHamburguesas.vue";
import Bebidas from "./FilterBebidas.vue";
import Pizzas from "./FilterPizzas.vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      loader: true,
      show: false,
    };
  },
  methods: {
    ...mapActions("productos", ["mostrarProductos"]),
  },
  components: {
    Hamburguesas,
    Bebidas,
    Pizzas,
  },
  mounted() {
    this.mostrarProductos();
    setTimeout(() => {
      this.loader = false;
    }, 1000);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

* {
  font-family: "Bebas Neue", cursive;
}
.fontTitulo {
  background: url("../assets/bg-image-cart.jpg");
  color: white;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 68px;
}
</style>
