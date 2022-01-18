<template>
  <v-parallax class="banner" dark height="450" src="../assets/parallax.png">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 style="font-size: 55px">Fast Food Gourmet</h1>
        <v-btn color="error" x-large style="border-radius: 15px" href="menu" class="zoom">
          PEDÍ ONLINE</v-btn
        >
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
* {
  font-family: "Bebas Neue", cursive;
}
.banner {
  background-image: url("../assets/bannerParallax.jpg");
}
</style>
