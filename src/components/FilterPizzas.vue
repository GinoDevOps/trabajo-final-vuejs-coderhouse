<template>
  <v-row>
    <v-col
      cols="12"
      lg="3"
      class="d-flex child-flex mt-3 mb-3"
      v-for="(producto, index) in filtroPizzas"
      :key="index"
    >
      <v-sheet color="grey" v-if="loader">
        <v-skeleton-loader type="card-avatar, article, actions">
        </v-skeleton-loader>
      </v-sheet>
      <v-card v-else shaped class="zoom">
        <v-img :src="producto.image" width="500" height="300" contain></v-img>
        <v-card-title style="font-size: 25px">
          {{ producto.product }}
        </v-card-title>
        <v-card-title>Precio: ${{ parseFloat(producto.price) }}</v-card-title>
        <v-card-actions>
          <ProductoInfo :infoProduct="producto.description" />
          <v-spacer> </v-spacer>
          <v-btn
            @click="agregarAlCarrito(producto)"
            color="error"
            style="border-radius: 15px"
            ><v-icon left> mdi-cart</v-icon> Agregar
          </v-btn>
        </v-card-actions>
      </v-card>
      <div class="alert" v-if="show" style="z-index: 999">
        <v-alert type="success" dark> ¡Producto agregado al carrito! </v-alert>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import ProductoInfo from "./InformacionProductos.vue";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      loader: true,
      show: false,
    };
  },
  components: {
    ProductoInfo,
  },
  methods: {
    ...mapActions("carrito", ["agregarProductoCarrito"]),
    ...mapActions("productos", ["mostrarProductos"]),

    agregarAlCarrito(producto) {
      this.show = true;
      this.agregarProductoCarrito(producto);
      setTimeout(() => {
        this.show = false;
      }, 1000);
    },
  },

  computed: {
    ...mapState("productos", ["productos"]),
    filtroPizzas() {
      return this.productos.filter((elem) => elem.category === "pizzas");
    },
  },
  mounted() {
    this.mostrarProductos();
    setTimeout(() => {
      this.loader = false;
    }, 500);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
* {
  font-family: "Bebas Neue", cursive;
}
.alert {
  width: 100%;
  left: 0;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
}
</style>
