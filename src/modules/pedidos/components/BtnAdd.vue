<template>
  <v-btn
    class="absolute"
    to="/cardapio/categorias"
    fab
    dark
    large
    color="error"
  >
    <v-icon dark> mdi-plus-circle </v-icon>
  </v-btn>
</template>

<script>
export default {};
</script>

<style>
.absolute {
  position: fixed;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
}
</style>
