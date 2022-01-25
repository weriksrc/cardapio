<template>
  <div>
    Carrinho
    <ListProduto :produtos="getCart.produtos" />
  </div>
</template>

<script>
import ListProduto from "../components/ListProduto.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    ListProduto,
  },
  computed: {
    ...mapGetters({
      getCart: "pedidos/getCart",
    }),
  },
};
</script>

<style></style>
