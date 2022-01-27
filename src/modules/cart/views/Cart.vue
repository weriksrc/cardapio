<template>
  <div>
    total carrinho: R$ {{ getValorTotalProdutosCart }}
    <ListProdutoCart :produtos="getProdutos" />
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
      getProdutos: "cart/getProdutos",
    }),
  },
};
</script>

<style></style>
