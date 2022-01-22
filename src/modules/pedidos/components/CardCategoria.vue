<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="item in items" :key="item.id" cols="6" sm="6" md="4">
        <v-card
          :loading="false"
          max-width="200"
          :to="`categorias/${item.id}/cardapios`"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="150"
            lazy-src="https://image.freepik.com/vetores-gratis/pagina-de-erro-404-nao-encontrada_114341-25.jpg"
            :src="item.imagen_path"
          ></v-img>
        </v-card>
        <v-card-title class="mx-auto">{{ item.descricao }}</v-card-title>
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
      let response = await servicesCategorias().show({cardapio: 1 });
      this.items = response.data.data;
    },
  },
  created() {
    this.categoriasShow();
  },
};
</script>

<style></style>
