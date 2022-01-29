<template>
  <v-row class="d-inline"> <v-card> Pedidos </v-card> </v-row>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      getUser: "auth/getUser",
    }),
  },
  mounted() {
    console.log("pedidos");
    Echo.private("store-pedido." + this.getUser.id).listen(
      ".StorePedido",
      (e) => {
        console.log("DEU CETO", e);
      }
    );
  },
};
</script>
