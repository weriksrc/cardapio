<template>
  <v-overlay :value="active">
    <v-progress-circular class="center" indeterminate size="200">
      Carregando...
    </v-progress-circular>
  </v-overlay>
</template>

<script>
import { events } from "./events";
export default {
  name: "PageLoader",

  data() {
    return {
      active: false,
    };
  },
  mounted() {
    events.$on("show", this.show);
  },
  methods: {
    show(active) {
      this.active = active;
    },
  },
};
</script>

<style>
.center {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
