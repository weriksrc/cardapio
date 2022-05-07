<template>
  <div class="d-relative">
    <ListProdutoCart :produtos.sync="produtos" />
    <BtnFazerPedido :total="getValorTotal" :produtos="getProdutos" />
  </div>
</template>

<script>
import ListProdutoCart from "../components/ListProdutoCart.vue";
import BtnFazerPedido from "../components/BtnFazerPedido.vue";
import { mapGetters, mapActions } from "vuex";
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
    produtos: {
      get() {
        return this.getProdutos;
      },
      set(value) {
        this.actionProdutos(value);
      },
    },
  },

  methods: {
    ...mapActions({
      actionProdutos: "cart/actionProdutos",
    }),
  },
};
</script>

<style></style>
