<template>
  <v-parallax :src="src" height="250"> </v-parallax>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
    },
  },
};
</script>

<style></style>
