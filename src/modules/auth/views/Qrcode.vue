<template></template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      hoverlay: true,
    };
  },
  methods: {
    ...mapActions({
      actionToken: "auth/actionToken",
    }),

    toPedidos() {
      this.$router.push("/pedidos/categorias");
    },
  },
  created() {
    this.token = this.$route.params.token;
    this.actionToken(this.$route.params.token);
    this.toPedidos();
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
