<template>
  <v-container>
    <v-row>
      <template v-for="(url, i) in url">
        <v-col :key="i" cols="12" lg="3">
          <v-card
            class="d-flex align-center justify-space-between mt-5 mb-5 zoom"
          >
            <v-img :src="url.url"> </v-img>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      url: [
        {
          url: "https://livedemo00.template-help.com/wt_61177_v1/images/index-gallery-1-480x394.jpg",
        },
        {
          url: "https://livedemo00.template-help.com/wt_61177_v1/images/index-gallery-2-480x394.jpg ",
        },
        {
          url: "https://livedemo00.template-help.com/wt_61177_v1/images/index-gallery-3-480x394.jpg ",
        },
        {
          url: "https://livedemo00.template-help.com/wt_61177_v1/images/index-gallery-4-480x394.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
