<template>
  <v-parallax :src="categoria.imagen_path" height="250">
    <v-row class="teste" align="center">
      <v-col class="text-center mt-15">
        <h1 class="text-h3 font-weight-thin mb-4">{{ categoria.descricao }}</h1>
        <h4 class="subheading">Drinks, sucos, destilados</h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  props: {
    categoria: {
      type: Object,
    },
  },
};
</script>

<style>
.teste {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(121, 117, 117, 0) 0%,
    rgba(0, 0, 0, 0.788) 90%
  );
}
</style>
