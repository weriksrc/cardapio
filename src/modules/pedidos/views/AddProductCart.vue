<template>
  <div>
    {{ produto.nome }}
    <CurrentCaroselProduct />
    <CurrentDescriptionProduct :descricao="produto.nome" />
    <ListCurrentAdditionalProduct
      :adicionais="produto.relationships.adicionais"
    />
  </div>
</template>

<script>
import CurrentCaroselProduct from "../components/CurrentCaroselProduct";
import CurrentDescriptionProduct from "../components/CurrentDescriptionProduct";
import ListCurrentAdditionalProduct from "../components/ListCurrentAdditionalProduct";
import serviceProduto from "../../../services/Estoque/Produtos";
export default {
  components: {
    CurrentCaroselProduct,
    CurrentDescriptionProduct,
    ListCurrentAdditionalProduct,
  },
  data() {
    return {
      produto: {},
    };
  },
  methods: {
    async showProduto() {
      let { data } = await serviceProduto(this.$route.params.idProduto).show({
        includes: "adicionais,imagens",
      });

      this.produto = data.data;
    },
  },
  created() {
    this.showProduto();
    console.log("adicionais", this.produto.relationships.adicionais);
  },
};
</script>

<style></style>
