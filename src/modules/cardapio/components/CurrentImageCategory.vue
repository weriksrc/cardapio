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
export default {
  props: {
    src: {
      type: String,
    },
  },
};
</script>

<style></style>
