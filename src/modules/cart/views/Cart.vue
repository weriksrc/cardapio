<template>
  <div>
    total carrinho: R$ {{ getValorTotal }}
    <ListProdutoCart :produtos="getProdutos" />
    <BtnFazerPedido :produtos="getProdutos" />
  </div>
</template>

<script>
import ListProdutoCart from "../components/ListProdutoCart.vue";
import BtnFazerPedido from "../components/BtnFazerPedido.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    ListProdutoCart,
    BtnFazerPedido,
  },
  computed: {
    ...mapGetters({
      getProdutos: "cart/getProdutos",
      getValorTotal: "cart/getValorTotal",
    }),
  },
};
</script>

<style></style>
