<template>
  <div>
    <CurrentCaroselProduct :produto.sync="produto" />
    <CurrentDescriptionProduct :produto.sync="produto" />
    <BtnCart @click:save="addProdutoCart()" :produto.sync="produto" />
    <ListCurrentAdditionalProduct :produto.sync="produto" />
  </div>
</template>

<script>
import CurrentCaroselProduct from "../components/CurrentCaroselProduct";
import CurrentDescriptionProduct from "../components/CurrentDescriptionProduct";
import ListCurrentAdditionalProduct from "../components/ListCurrentAdditionalProduct";
import BtnCart from "../components/BtnCart";
import serviceProduto from "../../../services/Estoque/Produtos";

import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    CurrentCaroselProduct,
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
      actionAddProduto: "cart/actionAddProduto",
    }),
    async addProdutoCart() {
      this.actionAddProduto(this.getCurrentProduto);
    },

    async showProduto() {
      try {
        this.$loading(true);
        let { data } = await serviceProduto(this.$route.params.idProduto).show({
          includes: "produtosAdicionais.adicional,imagens",
        });

        await Object.assign(data, {
          quantidade: 1,
          produto_id: data.id,
          observacao: "",
        });

        await data.produtos_adicionais.map((produtoAdicional) =>
          Object.assign(produtoAdicional, { quantidade: 1, check: false })
        );

        this.actionProdutoSelect(data);
      } catch (error) {
      } finally {
        this.$loading(false);
      }
    },
  },
  created() {
    this.showProduto();
  },
};
</script>

<style></style>
