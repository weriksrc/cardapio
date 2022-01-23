<template>
  <v-list two-line class="mb-12">
    <template v-for="item in items">
      <v-list-item class="mt-5" :key="item.id" :to="`cardapios/${item.id}`">
        <v-card rounded="2">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="120"
            max-width="150"
            :src="item.imagem"
          >
          </v-img>
        </v-card>
        <v-list-item-content>
          <v-list-item-title
            class="ml-5"
            v-text="item.nome"
          ></v-list-item-title>

          <v-list-item-subtitle
            class="text--primary ml-5"
            v-text="item.valor_venda"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import serviceProduto from "../../../services/Estoque/Produtos";
export default {
  data() {
    return {
      items: [],
    };
  },

  methods: {
    async showProdutos() {
      let { data } = await serviceProduto().show({
        cardapio: 1,
        categoria_id: this.$route.params.idCategorias,
      });
      this.items = data.data;
    },
  },

  created() {
    this.showProdutos();
  },
};
</script>

<style></style>
