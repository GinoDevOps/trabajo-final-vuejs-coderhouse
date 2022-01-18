<template>
  <v-container>
    <v-row class="d-flex align-center justify-space-between">
      <template v-for="(url, i) in data">
        <v-col :key="i" cols="12" lg="3">
          <v-hover v-slot="{ hover }">
            <router-link to="/menu" style="text-decoration: none">
              <v-card
                shaped
                :style="`background: url(${url.url}) no-repeat center center`"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                height="400"
                class="d-flex align-end justify-center mt-5 mb-5 zoom"
              >
                <v-card-title style="font-size:40px; color:white" >{{ url.title }}</v-card-title>
              </v-card>
            </router-link>
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
        },
        {
          title: "PROMOCIONES",
          url: "https://livedemo00.template-help.com/wt_61177_v1/images/index-01-566x401.jpg",
        },
        {
          title: "PEDÍ ONLINE",
          url: "https://livedemo00.template-help.com/wt_61177_v1/images/index-02-566x401.jpg",
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
* {
  font-family: "Bebas Neue", cursive;
}
.zoom {
  transition: 0.5s;
}
.zoom:hover {
  transform: scale(1.05);
}
</style>
