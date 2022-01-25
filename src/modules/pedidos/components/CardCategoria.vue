<template>
  <v-container fluid>
    <v-row class="mt-2 mb-8" dense>
      <v-col
        class="d-inline-block"
        v-for="item in items"
        :key="item.id"
        cols="6"
        sm="6"
        md="4"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            rounded="1"
            :elevation="hover ? 20 : 2"
            class="center"
            :loading="false"
            max-width="250"
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
        </v-hover>
        <v-card-title class="mx-auto center">{{ item.descricao }}</v-card-title>
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
  //teste
  methods: {
    async categoriasShow() {
      try {
        this.$loading(true);
        let { data } = await servicesCategorias().show({ cardapio: 1 });
        console.log(data);
        this.items = data.data;
      } catch (error) {
      } finally {
        this.$loading(false);
      }
    },
  },
  created() {
    this.categoriasShow();
  },
};
</script>

<style>
.center {
  justify-content: center;
}
</style>
