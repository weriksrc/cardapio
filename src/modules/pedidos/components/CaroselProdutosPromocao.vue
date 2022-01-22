<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="item in items" :key="item.id">
      <v-img
        lazy-src="https://image.freepik.com/vetores-gratis/pagina-de-erro-404-nao-encontrada_114341-25.jpg"
        :src="item.imagem"
      >
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import servicesProdutos from "../../../services/Estoque/Produtos";
export default {
  data() {
    return {
      items: [],
    };
  },

  methods: {
    async showProdutosPromocoes() {
      let { data } = await servicesProdutos().show({
        cardapio: 1,
        // valor_desconto: 50,
      });
      this.items = data.data;
    },
  },

  created() {
    this.showProdutosPromocoes();
  },
};
</script>

<style></style>
