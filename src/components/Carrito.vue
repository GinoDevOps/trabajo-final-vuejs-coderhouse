<template>
  <v-app>
    <Navbar />
    <h1 class="titulo mt-8">Carrito</h1>
    <v-container mt-15>
      <v-row>
        <v-col cols="12" class="d-flex mt-1 mb-3 align-center justify-center">
          <v-sheet color="grey" v-if="loader">
            <v-skeleton-loader type="v-card"> </v-skeleton-loader>
          </v-sheet>
          <v-container v-else>
            <v-card
              class="d-lg-flex align-center mt-4"
              v-for="(producto, i) in carrito"
              :key="i"
            >
              <v-img :src="producto.image" width="400"> </v-img>
              <v-container>
                <v-card-title style="font-size: 30px"
                  >{{ producto.product }}
                </v-card-title>
                <v-spacer></v-spacer>
                <v-container class="d-flex">
                  <v-container
                    class="d-flex flex-column"
                    style="max-width: 50%"
                  >
                    <h2>
                      <input
                        type="number"
                        style="width: 60px"
                        min="1"
                        v-model="producto.quantity"
                        :max="producto.disponibles"
                        class="pl-2"
                      />
                      u.
                    </h2>
                    <p>Disponibles: {{ producto.disponibles }}</p>
                  </v-container>
                  <v-spacer></v-spacer>
                  <v-card-title style="font-size: 25px"
                    >$ {{ calcularPrecioXProducto(producto) }}</v-card-title
                  >
                </v-container>

                <v-card-actions>
                  <v-btn
                  x-large
                    class="ml-2"
                    color="error"
                    style="border-radius: 15px"
                    @click="eliminarProducto(producto.id)"
                    >Eliminar</v-btn
                  >
                </v-card-actions>
              </v-container>
            </v-card>
            <v-container
              v-if="carritoVacio"
              class="d-flex flex-column align-center"
            >
              <v-img
                :src="require('../assets/carrito-vacio.png')"
                style="max-width: 150px"
              ></v-img>
              <h3 class="mt-4">Tu carrito está vacio</h3>
              <h1 class="mt-1">¡Continúa comprando!</h1>
              <router-link to="/menu" style="text-decoration: none">
                <v-btn
                  color="error"
                  class="mt-2 zoom"
                  x-large
                  style="border-radius: 15px"
                >
                  ¡Comprar!</v-btn
                >
              </router-link>
            </v-container>

            <v-container v-else>
              <v-container class="d-flex justify-end mb-6">
                <h2>Total: ${{ total }}</h2>
              </v-container>

              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-container class="d-flex justify-end mb-6">
                    <v-btn
                      x-large
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      Continuar compra
                    </v-btn>
                  </v-container>
                </template>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-card>
                    <v-card-title>
                      <span style="font-size: 24px">Tu pedido</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              label="Nombre"
                              v-model="dataUser.nombre"
                              :rules="nameRules"
                            ></v-text-field>
                          </v-col>

                          <v-container>
                            <h3>¿Donde querés recibir tu pedido?</h3>
                          </v-container>
                          <v-col cols="12" sm="12" md="12">
                            <v-text-field
                              label="Dirección"
                              v-model="userAddress.direccion"
                              :rules="addresRules"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              label="Localidad"
                              v-model="userAddress.localidad"
                              :rules="addresRules"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              label="Provincia"
                              v-model="userAddress.provincia"
                              :rules="addresRules"
                            ></v-text-field>
                          </v-col>
                          <v-container>
                            <h3>¿Cómo querés pagar?</h3>
                            <v-radio-group v-model="toggle">
                              <v-radio
                                label="Efectivo"
                                color="primary"
                                value="efectivo"
                              ></v-radio>
                              <v-radio
                                label="Tarjeta débito/crédito"
                                color="primary"
                                value="tarjeta"
                              ></v-radio>
                            </v-radio-group>
                          </v-container>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="white--text red darken-1" @click="close()">
                        Cancelar
                      </v-btn>
                      <v-btn
                        color="white--text green darken-1"
                        @click="sendOrder()"
                      >
                        <v-icon left> mdi-whatsapp</v-icon>
                        Realizar pedido</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-form>
              </v-dialog>
            </v-container>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "./Navbar.vue";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {
    Navbar,
  },
  data: () => ({
    valid: true,
    loader: true,
    carritoVacio: false,
    dialog: false,
    toggle: true,
    nuevoIndex: -1,
    dataUser: {
      nombre: "",
    },
    userAddress: {
      direccion: "",
      localidad: "",
      provincia: "",
    },
    nameRules: [
      (v) => !!v || "El nombre es requerido",
      (v) =>
        (v && v.length <= 10) || "El nombre no debe superar los 10 caracteres",
    ],
    addresRules: [(v) => !!v || "La dirección es requerida"],
  }),
  methods: {
    ...mapActions("carrito", ["mostrarCarrito"]),
    ...mapActions("carrito", ["eliminarProductoCarrito"]),

    eliminarProducto(id) {
      this.eliminarProductoCarrito(id);
      this.mostrarCarrito();
    },
    calcularPrecioXProducto(producto) {
      return producto.price * producto.quantity;
    },
    carritoStatus() {
      if (this.productosEnCarrito === 0) {
        this.carritoVacio = true;
      }
    },
    sendOrder() {
      if (
        this.$refs.form.validate() &&
        (this.toggle == "efectivo" || this.toggle == "tarjeta")
      ) {
        let productsString = "";
        let addressMessage = "";
        this.carrito.forEach((elem) => {
          productsString =
            productsString +
            "%0D%0A" +
            elem.product.replace(" ", "+") +
            "+-+" +
            "%24" +
            elem.price.toString() +
            ".";
          addressMessage =
            this.userAddress.direccion +
            ", " +
            this.userAddress.localidad +
            ", " +
            this.userAddress.provincia;
        });
        window.location.href = `https://wa.me/5491132686326?text=Hola+,+mi+nombre+es+${
          this.dataUser.nombre
        }%21%0D%0AQuiero+realizar+un+pedido+de+los+siguientes+items%3A${
          productsString +
          " La dirección de envio seria: " +
          addressMessage +
          ". El total seria: $" +
          this.total +
          ", paga en: " +
          this.toggle
        }`;
      }
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.nuevoIndex = -1;
      });
    },
  },
  computed: {
    ...mapGetters("carrito", ["productosEnCarrito"]),
    ...mapState("carrito", ["carrito"]),
    total: function () {
      this.carritoStatus();
      let total = 0;
      this.carrito.forEach((producto) => {
        total += producto.quantity * producto.price;
      });
      return total;
    },
  },
  mounted() {
    this.mostrarCarrito();
    setTimeout(() => {
      this.loader = false;
    }, 1000);
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
* {
  font-family: "Bebas Neue", cursive;
}
.titulo {
  background: url("../assets/bg-image-cart.jpg");
  color: white;
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
  font-size: 70px;
}
</style>
