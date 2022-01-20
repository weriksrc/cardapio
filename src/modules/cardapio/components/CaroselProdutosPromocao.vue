<template>
  <v-app grid-list-xs>
    <BaseCarosel />
    <ListCategorias />
  </v-app>
</template>

<script>
import BaseCarosel from "@/components/BaseCarosel.vue";
import ListCategorias from "./ListCategorias.vue";
export default {
  components: {
    BaseCarosel,
    ListCategorias,
  },
};
</script>

<style></style>
