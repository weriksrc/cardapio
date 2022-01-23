<template>
  <div class="absolute">
    <v-btn fab dark large color="error">
      <v-icon dark> mdi-cart-arrow-down </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.absolute {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
}
</style>
