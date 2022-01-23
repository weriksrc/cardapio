<template>
  <div>
    <CurrentCaroselProduct :produto="produto" />
    <CurrentDescriptionProduct :produto="produto" />
    <BtnCart />
    <ListCurrentAdditionalProduct
      :adicionais="produto.relationships.adicionais"
    />
  </div>
</template>

<script>
import CurrentCaroselProduct from "../components/CurrentCaroselProduct";
import CurrentDescriptionProduct from "../components/CurrentDescriptionProduct";
import ListCurrentAdditionalProduct from "../components/ListCurrentAdditionalProduct";
import BtnCart from "../components/BtnCart";
import serviceProduto from "../../../services/Estoque/Produtos";
export default {
  components: {
    CurrentCaroselProduct,
    CurrentDescriptionProduct,
    ListCurrentAdditionalProduct,
    BtnCart,
  },
  data() {
    return {
      produto: {},
    };
  },
  methods: {
    async showProduto() {
      try {
        this.$loading(true);
        let { data } = await serviceProduto(this.$route.params.idProduto).show({
          includes: "adicionais,imagens",
        });

        this.produto = data.data;
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
