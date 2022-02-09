<template>
  <v-card class="pa-6 card-container">
    <v-row class="justify-space-around">
      <v-col v-for="item in items" :key="item.id" cols="6" sm="6" md="4">
        <v-hover v-slot="{ hover }">
          <v-card
            rounded="1"
            :elevation="hover ? 20 : 2"
            class="card-column"
            :loading="false"
            max-width="250"
            :to="`categorias/${item.id}/produtos`"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="150" :src="item.imagen_path">
              <div class="name-category">
                <v-card-title class="subtitle-1 center white--text">{{
                  item.nome
                }}</v-card-title>
              </div>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-card>
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
.card-column {
  padding: 0 !important;
  margin-top: 6px !important;
  margin-bottom: 4px !important;
  margin-left: 10px !important;
  margin: 0 auto !important;
}

.card-container {
  margin-top: -50px;
  border-radius: 20px !important;
  box-shadow: none !important;
}

.name-category {
  position: absolute;
  width: 100%;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.781) 90%
  );
}
</style>
