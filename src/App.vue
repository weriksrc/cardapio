<template>
  <v-app>
    <loading />
    <response />
    <router-view />
  </v-app>
</template>

<script>
import Response from "./support/reponse/Response.vue";

export default {
  name: "App",
};
</script>
