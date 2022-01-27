<template>
  <div>
    total carrinho: R$ {{ getValorTotalProdutosCart }}
    <ListProdutoCart :produtos="getCart.produtos" />
  </div>
</template>

<script>
import ListProdutoCart from "../components/ListProdutoCart.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    ListProdutoCart,
  },
  computed: {
    ...mapGetters({
      getCart: "cardapio/getCart",
      getValorTotalProdutosCart: "cardapio/getValorTotalProdutosCart",
    }),
  },
};
</script>

<style></style>
