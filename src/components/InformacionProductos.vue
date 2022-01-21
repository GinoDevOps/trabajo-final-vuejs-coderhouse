<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        v-bind="attrs"
        v-on="on"
        style="border-radius: 15px"
      >
        INFO</v-btn
      >
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="primary" dark style="font-size: 35px"
          >Informacion del Producto</v-toolbar
        >
        <v-card-text
          ><div class="text-p pa-6" style="font-size: 20px">
            {{ infoProduct }}
          </div></v-card-text
        >
        <v-card-actions class="justify-end">
          <v-btn
            @click="dialog.value = false"
            style="border-radius: 15px"
            color="error"
            ><v-icon left>mdi-close-circle-outline</v-icon> Cerrar</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  props: {
    infoProduct: String,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
* {
  font-family: "Bebas Neue", cursive;
}
</style>
