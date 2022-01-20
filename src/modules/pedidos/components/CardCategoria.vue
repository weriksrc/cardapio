<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="6" sm="6" md="4">
        <v-card :loading="false" max-width="200">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="150"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
        </v-card>
        <v-card-title class="mx-auto">Cafes</v-card-title>
      </v-col>

      <v-col cols="6" sm="6" md="4">
        <v-card :loading="false" max-width="200">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="150"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
        </v-card>
        <v-card-title>Cafes</v-card-title>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import servicesCategorias from "../../../services/Estoque/Categorias";
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async categoriasShow() {
      let response = await servicesCategorias().show({ cardapio: 1 });
      this.items = response.data.data;
    },
  },
  created() {
    this.categoriasShow();
  },
};
</script>

<style></style>
