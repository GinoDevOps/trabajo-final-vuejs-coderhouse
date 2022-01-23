<template>
  <v-app>
    <Navbar />
    <h1 class="titulo">Administrador de la tienda</h1>
    <v-sheet color="grey" v-if="loader">
      <v-skeleton-loader type="table"> </v-skeleton-loader>
    </v-sheet>
    <v-data-table
      :headers="productosHeader"
      :items="productos"
      :items-per-page="10"
      class="elevation-1"
      hide-default-footer
      v-else
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Listado</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Nuevo producto
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Nuevo producto</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="dataProductos.image"
                        label="Imagen Url"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="dataProductos.product"
                        label="Producto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model.number="dataProductos.price"
                        label="Precio"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model.number="dataProductos.disponibles"
                        label="Stock disponible"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        @keyup="lowerCase"
                        v-model="dataProductos.category"
                        label="Categoria"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="12">
                      <v-textarea
                        v-model="dataProductos.description"
                        name="input-7-1"
                        filled
                        label="Descripcion"
                        auto-grow
                      ></v-textarea>
                    </v-col>
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
                  @click="productoAdmin(dataProductos)"
                >
                  Agregar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small @click="eliminarProducto(item.id)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <p>No hay productos</p>
      </template>
    </v-data-table>
  </v-app>
</template>

<script>
import Navbar from "./Navbar.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      loader: true,
      productosHeader: [
        { text: "Producto", value: "product" },
        { text: "Precio", value: "price" },
        { text: "Descripcion", value: "description" },
        { text: "Stock Disponible", value: "disponibles" },
        { text: "Categoria", value: "category" },
        { text: "Acciones", value: "actions" },
      ],
      dialog: false,
      nuevoIndex: -1,
      dataProductos: {
        image: "",
        product: "",
        price: undefined,
        description: "",
        disponibles: undefined,
        category: "",
      },
    };
  },
  methods: {
    ...mapActions("productos", ["agregarProductoAdmin"]),
    ...mapActions("productos", ["eliminarProductoAdmin"]),
    ...mapActions("productos", ["mostrarProductos"]),

    productoAdmin(dataProductos) {
      this.agregarProductoAdmin(dataProductos);
      this.reset();
      this.close();
    },
    eliminarProducto(id) {
      this.eliminarProductoAdmin(id);
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.nuevoIndex = -1;
      });
    },
    reset() {
      this.dataProductos.product = "";
      this.dataProductos.price = "";
      this.dataProductos.disponibles = "";
      this.dataProductos.description = "";
      this.dataProductos.image = "";
      this.dataProductos.category = "";
    },
    lowerCase() {
      this.dataProductos.category = this.dataProductos.category.toLowerCase();
    },
  },
  computed: {
    ...mapState("productos", ["productos"]),
  },
  mounted() {
    this.mostrarProductos();
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
.textArea {
  background-color: white;
}
</style>
