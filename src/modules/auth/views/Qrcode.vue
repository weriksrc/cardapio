<template>
  <div>Get token</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      token: "",
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
    console.log(this.$route.params.token);
    this.token = this.$route.params.token;
    this.actionToken(this.$route.params.token);
    this.toPedidos();
  },
};
</script>

<style></style>
