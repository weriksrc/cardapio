<template>
  <div>
    <CurrentImageCategory :categoria="categoria" />
    <ListProduto :produtos="produtos" />
  </div>
</template>

<script>
import servicesCategorias from "../../../services/Http/Estoque/Categorias";
import CurrentImageCategory from "../components/CurrentImageCategory";
import ListProduto from "../components/ListProduto";
export default {
  components: {
    CurrentImageCategory,
    ListProduto,
  },
  data() {
    return {
      categoria: {},
      produtos: [],
    };
  },
  methods: {
    async showProdutos() {
      try {
        this.$loading(true);
        let { data } = await servicesCategorias(
          this.$route.params.idCategorias
        ).show({ includes: "produtos", cardapio: 1 });
        this.categoria = data;
        this.produtos = data.produtos;
      } catch (error) {
      } finally {
        this.$loading(false);
      }
    },
  },

  created() {
    this.showProdutos();
  },
};
</script>

<style></style>
