<template>
  <v-container class="ma-0 pa-0 container-app">
    <Carosel />
    <v-card class="pr-8 pl-8 pt-8 card-container">
      <v-row> reeee </v-row>
      <v-row> reeee </v-row>
    </v-card>
    <NavigationBar />
  </v-container>
</template>

<script>
import Carosel from "./BaseCarosel";
import NavigationBar from "./NavigationBar";
export default {
  name: "HelloWorld",
  components: {
    Carosel,
    NavigationBar,
  },
  data() {
    return {};
  },
};
</script>
<style>
.container-app {
  min-width: 100%;
}
.card-container {
  margin-top: -50px;
  border-radius: 20px !important;
  box-shadow: none !important;
}
</style>