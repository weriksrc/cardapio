<template>
  <v-row class="d-inline"> <v-card> Pedidos </v-card> </v-row>
</template>
<script>
import servicePedidos from "../../../services/Pedidos/Pedidos";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      pedidos: [],
    };
  },
  computed: {
    ...mapGetters({
      getUser: "auth/getUser",
    }),
  },
  methods: {
    async showPedidos() {
      try {
        this.$loading(true);
        let { data } = await servicePedidos().show();
        console.log(data);
      } catch (error) {
        this.$response("Erro ao lista pedidos");
      } finally {
        this.$loading(false);
      }
    },
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
  created() {
    this.showPedidos();
  },
};
</script>
