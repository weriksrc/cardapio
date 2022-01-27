<template>
  <div>
    <!-- <CurrentCaroselProduct :produto.sync="produto" /> -->
    <CurrentDescriptionProduct :produto.sync="produto" />
    <BtnCart
      labelSave="Editar Pedido"
      @click:save="editeProduto()"
      :produto.sync="produto"
    />
    <ListCurrentAdditionalProduct :produto.sync="produto" />
  </div>
</template>

<script>
// import CurrentCaroselProduct from "../components/CurrentCaroselProduct";
import CurrentDescriptionProduct from "../components/CurrentDescriptionProduct";
import ListCurrentAdditionalProduct from "../components/ListCurrentAdditionalProduct";
import BtnCart from "../components/BtnCart";

import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    //CurrentCaroselProduct,
    CurrentDescriptionProduct,
    ListCurrentAdditionalProduct,
    BtnCart,
  },
  computed: {
    ...mapGetters({
      getCurretProduto: "cardapio/getCurrentProduto",
    }),

    produto: {
      get() {
        return this.getCurretProduto;
      },
      set(newValue) {
        this.actionProdutoSelect(newValue);
      },
    },
  },
  methods: {
    ...mapActions({
      actionProdutoSelect: "cardapio/actionProdutoSelect",
      actionAddCurrentProdutoInCart: "cardapio/actionAddCurrentProdutoInCart",
    }),

    editeProduto() {
      this.actionAddCurrentProdutoInCart();
      this.$router.push("/pedidos/carrinho");
    },
  },
};
</script>

<style></style>
