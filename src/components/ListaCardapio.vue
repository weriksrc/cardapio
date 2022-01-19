<template>
  <v-container class="ma-0 pa-0 container-app">
    <Carosel />
    <v-card class="pa-4 card-container">
      <v-row>
        <v-col cols="6">
          <v-card class="card-image">

          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="card-image">

          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <NavigationBar />
  </v-container>
</template>

<script>
import Carosel from "./BaseCarosel";
import NavigationBar from "./NavigationBar";
export default {
  name: "ListaCardapio",
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
.card-image {
  min-width: 130px;
  min-height: 130px;
}
</style>