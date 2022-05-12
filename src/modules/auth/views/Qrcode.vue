<template></template>

<script>
import serviceAuthMesas from "../../../services/Http/Auth/authMesas";
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
      actionUser: "auth/actionUser",
    }),

    async showAuthMesas() {
      try {
        let { data } = await serviceAuthMesas(
          `?token=${this.$route.params.token}`
        ).store();

        this.actionUser(data);

        this.$router.push("/cardapio/categorias");
      } catch (error) {
        console.log("erro ao indentifica o ususario");
      }
    },
  },
  created() {
    this.showAuthMesas();
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
