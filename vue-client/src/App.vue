<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
      </div>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable */ 
export default {
  name: "App",

  components: {
  },

  data: () => ({
    //
  })
};
</script>
