<template>
  <div>
    <CurrentImageCategory :src="imagemCategoria" />
    <ListProduto :produtos="produtos" />
  </div>
</template>

<script>
import servicesCategorias from "../../../services/Estoque/Categorias";
import CurrentImageCategory from "../components/CurrentImageCategory";
import ListProduto from "../components/ListProduto";
export default {
  components: {
    CurrentImageCategory,
    ListProduto,
  },
  data() {
    return {
      imagemCategoria: "",
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

        this.imagemCategoria = data.imagen_path;
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
