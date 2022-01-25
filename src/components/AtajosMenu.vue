<template>
  <v-container>
    <v-row class="d-flex align-center justify-space-between">
      <template v-for="(url, i) in data">
        <v-col :key="i" cols="12" lg="4">
          <v-hover v-slot="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" max-width="600">
              <v-img :aspect-ratio="16 / 9" :src="url.url" height="350px">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="
                      d-flex
                      transition-fast-in-fast-out
                      orange
                      darken-2
                      v-card--reveal
                      white--text
                    "
                    style="height: 100%; font-size: 25px"
                  >
                    {{ url.info }}
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-6" style="position: relative">
                <router-link to="/menu" style="text-decoration: none">
                  <v-btn
                    @click="toMenu()"
                    absolute
                    color="orange"
                    class="white--text"
                    fab
                    large
                    right
                    top
                  >
                    <v-icon>mdi-silverware</v-icon>
                  </v-btn>
                </router-link>
                <div
                  class="font-weight-light grey--text mb-2"
                  style="font-size: 30px"
                >
                  {{ url.title }}
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: "MENÚ ESPECIAL",
          url: "https://livedemo00.template-help.com/wt_61177_v1/images/member-profile-4-1200x800_original.jpg",
          info: "Menús especiales ¡Todos los dias! ",
        },
        {
          title: "PROMOCIONES",
          url: "https://livedemo00.template-help.com/wt_61177_v1/images/index-01-566x401.jpg",
          info: "Las mejores promociones",
        },
        {
          title: "PEDÍ ONLINE",
          url: "https://livedemo00.template-help.com/wt_61177_v1/images/index-02-566x401.jpg",
          info: "¡Sin salir de tu casa!",
        },
      ],
    };
  },
  methods: {
    toMenu() {},
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
* {
  font-family: "Bebas Neue", cursive;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1.5;
  position: absolute;
  width: 100%;
}
</style>
