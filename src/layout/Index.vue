<template>
  <v-app>
    <v-main>
      <AppBar />
      <router-view />
      <NavigationBar />
    </v-main>
  </v-app>
</template>
<script>
import NavigationBar from "./NavigationBar";
import AppBar from "./AppBar";

export default {
  components: {
    AppBar,
    NavigationBar,
  },
};
</script>
