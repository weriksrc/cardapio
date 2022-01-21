<template>
  <div>
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="250"
      :src="src"
    ></v-img>
  </div>
</template>

<script>
import serviceCategorias from "../../../services/Estoque/Categorias";
export default {
  data() {
    return {
      src: "",
    };
  },
  methods: {
    async showCategoria() {
      let { data } = await serviceCategorias(
        this.$route.params.idCategorias
      ).show({ includes: "produtos" });
      this.src = data.data.imagen_path;
    },
  },

  created() {
    this.showCategoria();
  },
};
</script>

<style></style>
