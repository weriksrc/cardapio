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
import CurrentDescriptionProduct from "@/modules/cardapio/components/CurrentDescriptionProduct";
import ListCurrentAdditionalProduct from "@/modules/cardapio/components/ListCurrentAdditionalProduct";
import BtnCart from "@/modules/cardapio/components/BtnCart";

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
      getCurrentProduto: "cardapio/getCurrentProduto",
    }),

    produto: {
      get() {
        return this.getCurrentProduto;
      },
      set(newValue) {
        this.actionProdutoSelect(newValue);
      },
    },
  },
  methods: {
    ...mapActions({
      actionProdutoSelect: "cardapio/actionProdutoSelect",
      actionEditeProduto: "cart/actionEditeProduto",
    }),

    editeProduto() {
      this.actionEditeProduto(this.getCurrentProduto);
      this.$router.push("/carrinho/produtos");
    },
  },
};
</script>

<style></style>
