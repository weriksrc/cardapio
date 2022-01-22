<template>
  <v-list two-line>
    <template v-for="item in items">
      <v-list-item :key="item.id" :to="`cardapios/${item.id}`">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="80"
          max-width="80"
          :src="item.imagem"
        >
        </v-img>

        <v-list-item-content>
          <v-list-item-title v-text="item.nome"></v-list-item-title>

          <v-list-item-subtitle
            class="text--primary"
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
