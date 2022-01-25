<template>
  <v-footer color="#23201e">
    <v-card
      flat
      tile
      class="white--text text-center d-flex flex-column align-center"
      color="#23201e"
      width="100%"
    >
      <v-card-text>
        <v-btn icon href="https://www.linkedin.com/in/gianlucadonofrio">
          <v-icon size="24px" color="white"> mdi-linkedin </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Hecho por Gianluca D Onofrio <br />Curso Vue.JS CoderHouse
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Gianluca Donofrio</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({}),
  methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
* {
  font-family: "Bebas Neue", cursive;
}
</style>
